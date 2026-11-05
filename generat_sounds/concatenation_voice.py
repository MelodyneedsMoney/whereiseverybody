#!/usr/bin/env python3
"""Call the ConcatenationGAN website's public model endpoint, without extra effects.

This model accepts a 100-dimensional latent vector, not text or a recording.
Its automatically transcribed words are an output, not a requested script.
"""

import argparse
import json
import math
from pathlib import Path
import random
import shutil
import tempfile
from urllib.error import URLError
from urllib.parse import urlsplit
from urllib.request import Request, urlopen
import wave

ENDPOINT = "https://fiwgan-worker.antikythera.workers.dev"
REFERENCE = "https://latentspacecraft.antikythera.org/concatenationgan/"


def validate_latent(vector):
    if not isinstance(vector, list) or len(vector) != 100:
        raise ValueError("Latent input must be a JSON list containing 100 numbers.")
    if any(isinstance(x, bool) or not isinstance(x, (int, float))
           or not math.isfinite(x) or not -1 <= x <= 1 for x in vector):
        raise ValueError("Latent values must be finite numbers between -1 and 1, matching the webpage.")
    return vector


def generate(vector):
    request = Request(ENDPOINT, data=json.dumps({
        "z": vector, "sample_rate": 16000, "whisper_model": "base"
    }).encode(), headers={"Content-Type": "application/json"})
    with urlopen(request, timeout=180) as response:
        return json.load(response)


def save_result(response, vector, path):
    output = response.get("output")
    if not isinstance(output, dict) or not isinstance(output.get("audio"), str):
        raise ValueError("Model endpoint did not return an audio URL.")
    url = output["audio"]
    parsed = urlsplit(url)
    if parsed.scheme != "https" or parsed.hostname != "replicate.delivery":
        raise ValueError("Unexpected model audio URL; expected HTTPS on replicate.delivery.")
    path.parent.mkdir(parents=True, exist_ok=True)
    metadata = {
        "reference": REFERENCE, "endpoint": ENDPOINT, "z": vector,
        "transcription_is_automatic": True,
        "transcription": output.get("transcription"),
    }
    with tempfile.TemporaryDirectory(prefix="concatenation-", dir=path.parent) as temporary:
        audio = Path(temporary) / "audio.wav"
        with urlopen(url, timeout=60) as source, audio.open("wb") as target:
            shutil.copyfileobj(source, target)
        with wave.open(str(audio), "rb") as recording:
            if recording.getnframes() == 0:
                raise ValueError("Model returned an empty recording.")
            duration = recording.getnframes() / recording.getframerate()
        info = Path(temporary) / "metadata.json"
        info.write_text(json.dumps(metadata, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        audio.replace(path)
        info.replace(path.with_suffix(".json"))
    print(f"Saved actual reference-model output: {path} ({duration:.3f}s)")
    transcription = output.get("transcription") or {}
    if isinstance(transcription, dict):
        print(f"Automatic transcription (not guaranteed): {transcription.get('text', '')}")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--seed", type=int, default=42)
    parser.add_argument("--latent-file", type=Path, help="JSON list of 100 latent values, or saved metadata containing z")
    parser.add_argument("-o", "--output", type=Path, default=Path("concatenation_reference.wav"))
    parser.add_argument("--response-file", type=Path, help="reuse a saved API response without submitting another model request")
    parser.add_argument("--overwrite", action="store_true")
    args = parser.parse_args()
    if args.output.suffix.lower() != ".wav":
        parser.error("output must have a .wav extension")
    destinations = [args.output, args.output.with_suffix(".json")]
    if not args.overwrite and any(path.exists() for path in destinations):
        parser.error("output audio or metadata already exists; choose another output or use --overwrite")
    sources = [path.resolve() for path in [args.latent_file, args.response_file] if path]
    if any(path.resolve() in sources for path in destinations):
        parser.error("output must not replace an input JSON file")
    try:
        if args.latent_file:
            vector = json.loads(args.latent_file.read_text(encoding="utf-8-sig"))
            if isinstance(vector, dict):
                vector = vector.get("z")
        else:
            rng = random.Random(args.seed)
            vector = [round(rng.uniform(-1, 1), 6) for _ in range(100)]
        vector = validate_latent(vector)
        if args.response_file:
            response = json.loads(args.response_file.read_text(encoding="utf-8"))
        else:
            print("Calling the reference site's model. No recording or text is sent.", flush=True)
            response = generate(vector)
        if not isinstance(response, dict):
            raise ValueError("Model returned an invalid response.")
        save_result(response, vector, args.output)
    except (OSError, ValueError, URLError, wave.Error) as exc:
        raise SystemExit(f"Reference model failed: {exc}") from exc


if __name__ == "__main__":
    main()
