"""Generate AudioGen sound effects using hosted or local model inference."""

import argparse
import json
import os
from pathlib import Path
import re
import shutil
import sys
import time
from urllib.error import HTTPError, URLError
from urllib.parse import urlsplit
from urllib.request import Request, urlopen
import wave

ROOT = Path(__file__).resolve().parent
HOSTED_URL = "https://fffiloni-audiogen.hf.space"


def hosted_headers():
    headers = {"Content-Type": "application/json"}
    token = os.environ.get("HF_TOKEN") or os.environ.get("HUGGING_FACE_HUB_TOKEN")
    if not token:
        cache_home = Path(os.environ.get("XDG_CACHE_HOME", Path.home() / ".cache"))
        hf_home = Path(os.environ.get("HF_HOME", cache_home / "huggingface"))
        token_path = Path(os.environ.get("HF_TOKEN_PATH", hf_home / "token"))
        if token_path.is_file():
            token = token_path.read_text().strip()
    if token:
        headers["Authorization"] = f"Bearer {token.strip()}"
    return headers


def output_path(directory, index, prompt):
    slug = re.sub(r"[^a-z0-9]+", "_", prompt.lower()).strip("_")[:80] or "sound"
    return directory / f"{index:02d}_{slug}.wav"


def generate_hosted(args):
    """Use the public Gradio API; only the generated audio is downloaded."""
    args.output_dir.mkdir(parents=True, exist_ok=True)
    headers = hosted_headers()
    for index, prompt in enumerate(args.prompts, 1):
        print(f"Generating {index}/{len(args.prompts)} online: {prompt}", flush=True)
        request = Request(
            f"{HOSTED_URL}/gradio_api/call/infer",
            data=json.dumps({"data": [prompt, args.duration]}).encode(),
            headers=headers,
        )
        with urlopen(request, timeout=60) as response:
            event_id = json.load(response)["event_id"]
        if not re.fullmatch(r"[a-f0-9]+", event_id):
            raise RuntimeError("Hosted service returned an invalid job ID")
        event = None
        result = None
        deadline = time.monotonic() + 600
        stream_request = Request(f"{HOSTED_URL}/gradio_api/call/infer/{event_id}", headers=headers)
        with urlopen(stream_request, timeout=60) as stream:
            for raw_line in stream:
                if time.monotonic() > deadline:
                    raise TimeoutError("Hosted generation exceeded 10 minutes")
                line = raw_line.decode().strip()
                if line.startswith("event: "):
                    event = line[7:]
                elif line.startswith("data: "):
                    if event == "error":
                        raise RuntimeError(f"Hosted service error: {line[6:]}")
                    if event == "complete":
                        result = json.loads(line[6:])
                        break
        if not result or not isinstance(result[0], dict) or not result[0].get("url"):
            raise RuntimeError("Hosted service did not return an audio file")
        audio_url = result[0]["url"]
        if urlsplit(audio_url).scheme != "https" or urlsplit(audio_url).netloc != urlsplit(HOSTED_URL).netloc:
            raise RuntimeError("Hosted service returned an unexpected download URL")
        path = output_path(args.output_dir, index, prompt)
        temporary = path.with_suffix(".wav.part")
        try:
            with urlopen(audio_url, timeout=60) as response, temporary.open("wb") as output:
                shutil.copyfileobj(response, output)
            with wave.open(str(temporary), "rb") as audio:
                if audio.getnframes() == 0:
                    raise RuntimeError("Hosted service returned an empty WAV")
            temporary.replace(path)
        finally:
            temporary.unlink(missing_ok=True)
        print(f"Saved {path}", flush=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("prompts", nargs="*", help="sound descriptions; multiline text is split into separate prompts")
    parser.add_argument("--input-file", metavar="FILE",
                        help="UTF-8 text file with one sound description per line; use - for stdin")
    parser.add_argument("--duration", type=float, default=5)
    parser.add_argument("--backend", choices=["hosted", "local"], default="hosted",
                        help="hosted avoids model downloads; local runs inference on this machine")
    parser.add_argument("--output-dir", type=Path, default=ROOT / "generated_sounds")
    parser.add_argument("--device", choices=["cpu", "mps", "cuda"], default="cpu",
                        help="device for the local backend")
    parser.add_argument("--seed", type=int, default=42, help="random seed for the local backend")
    parser.add_argument("--threads", type=int, default=8, help="CPU threads for the local backend")
    args = parser.parse_args()
    if not 0 < args.duration <= 10:
        parser.error("--duration must be greater than 0 and at most 10 seconds")
    if args.threads < 1:
        parser.error("--threads must be positive")
    if args.input_file is not None:
        if args.prompts:
            parser.error("use either positional prompts or --input-file")
        try:
            text = sys.stdin.read() if args.input_file == "-" else Path(args.input_file).read_text(encoding="utf-8-sig")
        except (OSError, UnicodeError) as exc:
            parser.error(f"cannot read input file: {exc}")
        args.prompts = [line.strip() for line in text.splitlines() if line.strip()]
        if not args.prompts:
            parser.error("input must contain at least one nonempty sound description")
    elif args.prompts:
        args.prompts = [line.strip() for prompt in args.prompts for line in prompt.splitlines() if line.strip()]
        if not args.prompts:
            parser.error("input must contain at least one nonempty sound description")
    else:
        args.prompts = ["dog barking", "siren of an emergency vehicle", "footsteps in a corridor"]

    if args.backend == "hosted":
        try:
            generate_hosted(args)
        except (HTTPError, URLError, TimeoutError, RuntimeError) as exc:
            raise SystemExit(f"Hosted AudioGen failed: {exc}") from exc
        return

    os.environ.setdefault("HF_HOME", str(ROOT / ".cache" / "huggingface"))
    os.environ.setdefault("TORCH_HOME", str(ROOT / ".cache" / "torch"))
    os.environ.setdefault("TOKENIZERS_PARALLELISM", "false")
    try:
        import torch
        from audiocraft.models import AudioGen
    except ImportError as exc:
        raise SystemExit(
            f"Missing dependency: {exc}\n"
            "Run ./setup_sound_gen.sh, then .venv/bin/python sound_gen.py"
        ) from exc

    torch.set_num_threads(args.threads)
    torch.manual_seed(args.seed)
    print(f"Loading facebook/audiogen-medium on {args.device}…", flush=True)
    model = AudioGen.get_pretrained("facebook/audiogen-medium", device=args.device)
    model.set_generation_params(duration=args.duration)
    args.output_dir.mkdir(parents=True, exist_ok=True)
    # Generate individually to keep memory usage manageable on a laptop.
    for index, prompt in enumerate(args.prompts, 1):
        print(f"Generating {index}/{len(args.prompts)}: {prompt}", flush=True)
        with torch.inference_mode():
            samples = model.generate([prompt], progress=True)[0].cpu().float()
        samples = samples / samples.abs().max().clamp(min=1.0)
        pcm = (samples.clamp(-1, 1).t() * 32767).to(torch.int16).numpy()
        path = output_path(args.output_dir, index, prompt)
        with wave.open(str(path), "wb") as output:
            output.setnchannels(samples.shape[0])
            output.setsampwidth(2)
            output.setframerate(model.sample_rate)
            output.writeframes(pcm.astype("<i2").tobytes())
        print(f"\nSaved {path}", flush=True)


if __name__ == "__main__":
    main()
