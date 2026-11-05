#!/usr/bin/env python3
"""Apply vintage radio or granular voice effects to a recording, entirely locally."""

import argparse
import hashlib
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile

PRESETS = {
    "radio-word": {},
    "radio-cut": {},
    "radio-grain": {},
    "radio": {},
    "fragile": dict(low=110, high=3800, grain_ms=120, detune=1.4, repeats=0.30, delay=0.075),
    "subtle": dict(low=80, high=6200, grain_ms=180, detune=0.5, repeats=0.10, delay=0.045),
    "underwater": dict(low=140, high=1400, grain_ms=160, detune=1.8, repeats=0.20, delay=0.11),
}

DEFAULT_NOISE = Path(__file__).resolve().parent / "assets" / "50750__rutgermuller__radio-noise.wav"


def word_timings(samples, sample_rate, model_name="ctc", prompt=""):
    """Local speech recognition for boundaries only; original speech is retained."""
    import math
    import numpy as np
    from scipy import signal

    root = Path(__file__).resolve().parent.parent
    cache = root / ".cache" / "word-timing"
    key = hashlib.sha256(samples.tobytes() + f"v2|{sample_rate}|{model_name}|{prompt}".encode()).hexdigest()
    path = cache / f"{key}.json"
    if path.is_file():
        return json.loads(path.read_text(encoding="utf-8"))
    import torch
    torch.set_num_threads(4)
    mono = samples.mean(axis=1)
    divisor = math.gcd(sample_rate, 16000)
    audio = signal.resample_poly(mono, 16000 // divisor, sample_rate // divisor).astype(np.float32)
    print(f"Locating word boundaries locally ({model_name}; first run downloads model weights)…", flush=True)
    if model_name == "ctc":
        import re
        import torchaudio

        if not prompt.strip():
            raise ValueError("CTC word alignment needs the spoken script: use --transcript-file sounds.txt")
        script_words = re.findall(r"[A-Za-z]+(?:'[A-Za-z]+)?", prompt)
        if not script_words:
            raise ValueError("The CTC alignment transcript must contain English words.")
        torch.hub.set_dir(str(root / ".cache" / "torch" / "hub"))
        bundle = torchaudio.pipelines.WAV2VEC2_ASR_BASE_960H
        model = bundle.get_model().eval()
        dictionary = {label: index for index, label in enumerate(bundle.get_labels())}
        text = "|".join(script_words).upper()
        targets = torch.tensor([[dictionary[letter] for letter in text]], dtype=torch.int32)
        with torch.inference_mode():
            emissions, _ = model(torch.from_numpy(audio).unsqueeze(0))
            aligned, scores = torchaudio.functional.forced_align(emissions.log_softmax(-1), targets, blank=0)
        spans = torchaudio.functional.merge_tokens(aligned[0], scores[0], blank=0)
        expected = [dictionary[letter] for letter in text]
        if [span.token for span in spans] != expected:
            raise ValueError("Alignment did not cover every transcript character.")
        seconds_per_frame = len(audio) / 16000 / emissions.shape[1]
        words, cursor = [], 0
        for word in script_words:
            selected = spans[cursor:cursor + len(word)]
            words.append({"word": word, "start": selected[0].start * seconds_per_frame,
                          "end": selected[-1].end * seconds_per_frame})
            cursor += len(word) + 1
        cache.mkdir(parents=True, exist_ok=True)
        path.write_text(json.dumps(words, ensure_ascii=False, indent=2), encoding="utf-8")
        return words
    import whisper
    model = whisper.load_model(model_name, device="cpu", download_root=str(root / ".cache" / "whisper"))
    if prompt and len(audio) <= 30 * 16000:
        # Align the provided words rather than let a decoder omit repetitions.
        from whisper.timing import add_word_timestamps
        tokenizer = whisper.tokenizer.get_tokenizer(model.is_multilingual, language="en", task="transcribe")
        tokens = tokenizer.encode(" " + " ".join(prompt.split()))
        if len(tokens) > 400:
            raise ValueError("Transcript is too long for a single 30-second alignment window.")
        segments = [{"seek": 0, "start": 0.0, "end": len(audio) / 16000, "tokens": tokens}]
        mel = whisper.log_mel_spectrogram(whisper.pad_or_trim(audio), n_mels=model.dims.n_mels)
        add_word_timestamps(segments=segments, model=model, tokenizer=tokenizer, mel=mel,
                            num_frames=round(len(audio) / 160), last_speech_timestamp=0)
        result = {"segments": segments}
    else:
        if prompt:
            print("Recording exceeds 30 seconds; using recognition with the script as a hint, not forced alignment.", flush=True)
        result = model.transcribe(audio, word_timestamps=True, fp16=False, language="en" if model_name.endswith(".en") else None,
                                  temperature=0, condition_on_previous_text=False, initial_prompt=prompt or None)
    words = [{"word": word["word"].strip(), "start": float(word["start"]), "end": float(word["end"])}
             for segment in result["segments"] for word in segment.get("words", [])
             if word["end"] > word["start"]]
    if not words:
        raise ValueError("No word timestamps found; cannot cut each word reliably.")
    cache.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(words, ensure_ascii=False, indent=2), encoding="utf-8")
    return words


def word_end_gate(frames, sample_rate, words, strength, cut_ms=65):
    """Remove a short tail of every recognized word; leave its body untouched."""
    import numpy as np

    gate = np.ones(frames)
    for word in words:
        start = max(0, round(float(word["start"]) * sample_rate))
        end = min(frames, round(float(word["end"]) * sample_rate))
        if end <= start:
            continue
        length = min(round(sample_rate * cut_ms / 1000), max(1, round((end - start) * 0.32)))
        begin = end - length
        floor = (1 - strength) ** 3
        fade = min(length, max(1, round(sample_rate * .0015)))
        tail = np.full(length, floor)
        tail[:fade] = np.linspace(1, floor, fade)
        gate[begin:end] = np.minimum(gate[begin:end], tail)
    return gate


def phrase_end_gate(samples, sample_rate, strength, tail_ms=180):
    """Detect speech runs separated by >=220 ms pauses; gate only their ends."""
    import numpy as np

    frames = len(samples)
    gate = np.ones(frames, dtype=np.float64)
    hop = max(1, round(sample_rate * 0.01))
    power = np.mean(samples.astype(np.float64) ** 2, axis=1)
    padded = np.pad(power, (0, (-frames) % hop))
    rms = np.sqrt(np.mean(padded.reshape(-1, hop), axis=1))
    threshold = max(float(np.quantile(rms, 0.95)) * 0.065, 1e-6)
    active = np.flatnonzero(rms > threshold)
    if not len(active):
        return gate, []
    breaks = np.flatnonzero(np.diff(active) * hop >= sample_rate * 0.22)
    groups = np.split(active, breaks + 1)
    endings = []
    for group in groups:
        start, end = int(group[0] * hop), min(frames, int((group[-1] + 1) * hop))
        if end - start < sample_rate * 0.18:
            continue
        length = min(round(sample_rate * tail_ms / 1000), (end - start) // 3)
        if length < 8:
            continue
        begin = end - length
        tail = np.ones(length)
        # Three brief signal losses, then a complete cutoff. No pitch changes,
        # looping, bit crushing, or chops in the body of the phrase.
        for fraction, width, level in [(0.15, 0.06, 0.20), (0.43, 0.10, 0.06), (0.67, 0.08, 0.12)]:
            left = round(length * fraction)
            count = max(1, round(length * width))
            right = min(length, left + count)
            tail[left:right] = 1 - strength * (1 - level)
            fade = min((right - left) // 2, max(1, round(sample_rate * 0.001)))
            if fade:
                tail[left:left + fade] = np.linspace(1, tail[left + fade], fade)
                tail[right - fade:right] = np.linspace(tail[right - fade - 1], 1, fade)
        cutoff = max(0, length - round(sample_rate * 0.035))
        cutoff_floor = (1 - strength) ** 3
        tail[cutoff:] = cutoff_floor
        fade = min(length - cutoff, max(1, round(sample_rate * 0.002)))
        tail[cutoff:cutoff + fade] = np.linspace(1, cutoff_floor, fade)
        gate[begin:end] *= tail
        endings.append(end)
    return gate, endings


def recorded_noise(path, sample_rate, frames, channels):
    """Resample/map channels and seamlessly loop the supplied static recording."""
    import math
    import numpy as np
    from scipy import signal

    noise, noise_rate = read_recording(path)
    if not len(noise) or not np.isfinite(noise).all():
        raise ValueError("Noise recording is empty or contains invalid samples.")
    if noise_rate != sample_rate:
        divisor = math.gcd(noise_rate, sample_rate)
        noise = signal.resample_poly(noise, sample_rate // divisor, noise_rate // divisor, axis=0)
    if noise.shape[1] != channels:
        noise = np.repeat(np.mean(noise, axis=1, keepdims=True), channels, axis=1)
    noise = noise.astype(np.float64)
    overlap = min(round(sample_rate * 0.015), len(noise) // 4)
    if len(noise) >= frames:
        result = noise[:frames].copy()
    else:
        result = np.zeros((frames, channels))
        count = min(frames, len(noise))
        result[:count] = noise[:count]
        while count < frames:
            start = count - overlap
            length = min(len(noise), frames - start)
            if overlap:
                blend = np.linspace(0, 1, min(overlap, length))[:, None]
                result[start:start + len(blend)] *= 1 - blend
                result[start:start + len(blend)] += noise[:len(blend)] * blend
            result[start + overlap:start + length] = noise[overlap:length]
            count = start + length
    rms = float(np.sqrt(np.mean(result ** 2)))
    if rms < 1e-12:
        raise ValueError("Noise recording contains no audible samples.")
    return result / rms


def grain_radio_voice(voice, sample_rate, strength, rng, grain_ms, cut_depth, repeat_chance):
    """Local 25–65 ms slices, short stutters, irregular gates and coarse samples."""
    import numpy as np

    output = np.empty_like(voice)
    start = 0
    scale = max(float(np.quantile(np.abs(voice), 0.97)), 0.01)
    while start < len(voice):
        count = min(len(voice) - start, max(4, round(sample_rate * grain_ms / 1000 * rng.uniform(0.65, 1.45))))
        original = voice[start:start + count]
        axis = np.arange(count)
        ratio = 2 ** (rng.uniform(-1.4, 1.4) * strength / 12)
        position = np.minimum(axis * ratio, count - 1)
        grain = np.column_stack([np.interp(position, axis, original[:, ch]) for ch in range(voice.shape[1])])
        if rng.random() < repeat_chance * strength and count > 16:
            period = max(4, min(count, round(sample_rate * rng.uniform(0.012, 0.025))))
            loop = grain[np.arange(count) % period]
            grain = grain * (1 - 0.7 * strength) + loop * (0.7 * strength)
        # Coarse sample-and-hold and quantization add texture to the wet layer.
        hold = max(1, round(sample_rate / 6500))
        grain = grain[(np.arange(count) // hold) * hold]
        grain = np.round(grain / scale * 127) / 127 * scale
        mixed = original * (1 - 0.85 * strength) + grain * (0.85 * strength)
        gate = np.ones(count) * rng.uniform(0.80, 1.0)
        fade = min(count // 3, max(1, round(sample_rate * 0.0008)))
        gate[:fade] *= np.linspace(0.15, 1, fade)
        gap = max(1, min(count // 3, round(sample_rate * rng.uniform(0.003, 0.009))))
        gate[-gap:] *= 1 - cut_depth
        # Smooth very short edges so the segmentation is audible without
        # introducing uncontrolled full-amplitude sample discontinuities.
        ramp = min(fade, gap)
        gap_start = count - gap
        gate[gap_start:gap_start + ramp] = np.linspace(gate[gap_start - 1] if gap_start else 1,
                                                      1 - cut_depth, ramp)
        output[start:start + count] = mixed * (1 - strength + strength * gate[:, None])
        start += count
    return output


def compress_radio(samples, sample_rate, threshold_db=-24, ratio=3.5):
    """Stereo-linked RMS detector, soft knee, 8 ms attack / 120 ms release."""
    import numpy as np
    from scipy import signal

    power = np.mean(samples ** 2, axis=1)
    rms_pole = np.exp(-1 / (sample_rate * 0.005))
    level = 10 * np.log10(np.maximum(signal.lfilter([1 - rms_pole], [1, -rms_pole], power), 1e-12))
    over = level - threshold_db
    knee = 6.0
    slope = 1 - 1 / ratio
    reduction = np.where(over < -knee / 2, 0,
                         np.where(over > knee / 2, slope * over,
                                  slope * (over + knee / 2) ** 2 / (2 * knee)))
    attack = np.exp(-1 / (sample_rate * 0.008))
    release = np.exp(-1 / (sample_rate * 0.120))
    gain_db = np.empty(len(samples))
    state = 0.0
    for index, target in enumerate(reduction):
        pole = attack if target > state else release
        state = pole * state + (1 - pole) * target
        gain_db[index] = -state
    return samples * (10 ** (gain_db / 20))[:, None]


def process_radio(samples, sample_rate, strength, seed, highpass=400, lowpass=3800,
                  mid_gain_db=4, ratio=3.5, noise_db=-36, tuning=True,
                  granular=False, grain_ms=45, cut_depth=0.85, repeat_chance=0.45,
                  end_cuts=False, tail_ms=180, noise_file=None,
                  words=None, word_cut_ms=65, synthetic_noise_db=None):
    """Narrow speaker EQ -> soft saturation -> compression -> quiet static/hum.

    Noise is synthesized locally and measured relative to active voice RMS.
    The optional granular mode adds local cuts and stutters before the static.
    """
    import numpy as np
    from scipy import signal

    lowpass = min(lowpass, sample_rate * 0.45)
    if not 0 < highpass < lowpass:
        raise ValueError("Radio filter requires 0 < highpass < lowpass below the sample rate's Nyquist limit.")
    if not np.any(samples):
        return samples.copy()
    voice = samples.astype(np.float64)
    hp = signal.butter(4, highpass, btype="highpass", fs=sample_rate, output="sos")
    lp = signal.butter(4, lowpass, btype="lowpass", fs=sample_rate, output="sos")
    voice = signal.sosfilt(lp, signal.sosfilt(hp, voice, axis=0), axis=0)
    # RBJ peaking EQ: broad nasal/presence boost centered at 1.6 kHz.
    center = min(1600, lowpass * 0.75)
    amplitude = 10 ** (mid_gain_db * strength / 40)
    omega = 2 * np.pi * center / sample_rate
    alpha = np.sin(omega) / (2 * 0.9)
    b = np.array([1 + alpha * amplitude, -2 * np.cos(omega), 1 - alpha * amplitude])
    a = np.array([1 + alpha / amplitude, -2 * np.cos(omega), 1 - alpha / amplitude])
    voice = signal.lfilter(b / a[0], a / a[0], voice, axis=0)
    scale = max(float(np.quantile(np.abs(voice), 0.95)), 0.01)
    drive = 1 + 1.8 * strength
    saturated = np.tanh(voice * drive / scale) * scale / drive
    distortion_mix = (0.03 if end_cuts else 0.25) * strength
    voice = voice * (1 - distortion_mix) + saturated * distortion_mix
    voice = signal.sosfilt(lp, voice, axis=0)
    voice = compress_radio(voice, sample_rate, ratio=ratio)
    rng = np.random.default_rng(seed)
    if granular:
        voice = grain_radio_voice(voice, sample_rate, strength, rng, grain_ms, cut_depth, repeat_chance)

    power = np.mean(voice ** 2, axis=1)
    active = power[power > max(float(np.max(power)) * 0.01, 1e-12)]
    active_rms = float(np.sqrt(np.mean(active))) if len(active) else 0.0
    # Bounded makeup gain makes speech compact without boosting a quiet input
    # by an arbitrary amount. A final limiter only reduces peaks if necessary.
    makeup = min(10 ** (12 / 20), 10 ** (-18 / 20) / max(active_rms, 1e-12))
    voice *= makeup
    active_rms *= makeup
    if words is not None:
        voice *= word_end_gate(len(samples), sample_rate, words, strength, word_cut_ms)[:, None]
    elif end_cuts:
        gate, _ = phrase_end_gate(samples, sample_rate, strength, tail_ms)
        voice *= gate[:, None]
    padding = round(sample_rate * 0.18) if tuning else 0
    output = np.pad(voice, ((padding, padding), (0, 0)))
    frames, channels = output.shape
    noise_high = min(7500, sample_rate * 0.45) if granular else lowpass
    noise_filter = signal.butter(2, [min(600, noise_high / 2), noise_high],
                                 btype="bandpass", fs=sample_rate, output="sos")
    hiss = signal.sosfilt(noise_filter, rng.standard_normal(frames))
    hiss /= max(float(np.sqrt(np.mean(hiss ** 2))), 1e-12)
    if granular or synthetic_noise_db is not None:
        # Irregular electrical crackle and swells, kept separate from voice
        # gating so static remains audible between speech fragments.
        impulses = rng.normal(size=frames) * (rng.random(frames) < 16 / sample_rate)
        crackle = signal.lfilter([1], [1, -np.exp(-1 / (sample_rate * 0.0005))], impulses)
        crackle = signal.sosfilt(noise_filter, crackle)
        crackle /= max(float(np.sqrt(np.mean(crackle ** 2))), 1e-12)
        time_noise = np.arange(frames) / sample_rate
        hiss = hiss * (0.85 + 0.25 * np.sin(2 * np.pi * 0.63 * time_noise)) + crackle * 0.35
        hiss /= max(float(np.sqrt(np.mean(hiss ** 2))), 1e-12)
    noise_level = active_rms * 10 ** (noise_db / 20) * strength
    time = np.arange(frames) / sample_rate
    hum = np.sin(2 * np.pi * 60 * time) + 0.35 * np.sin(2 * np.pi * 120 * time)
    if noise_file is not None:
        # Recorded static and synthesized static are independent layers.
        output += recorded_noise(noise_file, sample_rate, frames, channels) * noise_level
    else:
        output += (hiss * noise_level + hum * noise_level * 0.20)[:, None]
    if noise_file is not None and synthetic_noise_db is not None:
        synthetic_level = active_rms * 10 ** (synthetic_noise_db / 20) * strength
        output += (hiss + hum * .20)[:, None] * synthetic_level
    if padding:
        for start, reverse in [(0, False), (frames - padding, True)]:
            envelope = np.sin(np.linspace(0, np.pi, padding)) ** 2
            sweep_time = np.arange(padding) / sample_rate
            upper = min(2400, sample_rate * 0.42)
            sweep = signal.chirp(sweep_time, f0=700 if not reverse else upper,
                                 f1=upper if not reverse else 700, t1=padding / sample_rate)
            burst = (0.85 * hiss[start:start + padding] + 0.15 * sweep) * envelope
            output[start:start + padding] += burst[:, None] * active_rms * 0.10 * strength
    peak = float(np.max(np.abs(output)))
    if peak > 0.98:
        output *= 0.98 / peak
    return output.astype(np.float32)


def read_recording(path):
    import soundfile as sf

    try:
        return sf.read(path, dtype="float32", always_2d=True)
    except (sf.LibsndfileError, RuntimeError) as original_error:
        with tempfile.TemporaryDirectory(prefix="voice-effect-") as temporary:
            decoded = Path(temporary) / "decoded.wav"
            if shutil.which("ffmpeg"):
                command = ["ffmpeg", "-nostdin", "-v", "error", "-i", str(path),
                           "-c:a", "pcm_s16le", str(decoded)]
            elif shutil.which("afconvert"):
                command = ["afconvert", "-f", "WAVE", "-d", "LEI16", str(path), str(decoded)]
            else:
                raise ValueError("Cannot decode this format; export the recording as WAV first.") from original_error
            result = subprocess.run(command, capture_output=True, text=True)
            if result.returncode:
                raise ValueError(f"Cannot decode recording: {result.stderr.strip()}") from original_error
            return sf.read(decoded, dtype="float32", always_2d=True)


def process_voice(samples, sample_rate, preset="radio-word", strength=0.8, seed=42, radio_options=None):
    """Process voice with the selected radio or legacy granular preset."""
    import numpy as np
    from scipy import signal

    if samples.ndim != 2 or not samples.shape[0] or not samples.shape[1]:
        raise ValueError("Recording must contain audio samples.")
    if not np.isfinite(samples).all():
        raise ValueError("Recording contains invalid audio samples.")
    if sample_rate < 4000:
        raise ValueError("Use a recording sampled at 4000 Hz or higher.")
    if not 0 <= strength <= 1:
        raise ValueError("Strength must be between 0 and 1.")
    if strength == 0:
        return samples.copy()
    if preset in ("radio", "radio-grain", "radio-cut", "radio-word"):
        options = dict(radio_options or {})
        options["granular"] = preset == "radio-grain"
        options["end_cuts"] = preset in ("radio-cut", "radio-word")
        options.setdefault("noise_db", -25 if preset == "radio-grain" else -28 if preset in ("radio-cut", "radio-word") else -36)
        if preset == "radio-word":
            if options.get("words") is None:
                raise ValueError("radio-word requires word timestamps; run the CLI to locate them automatically.")
            options.setdefault("synthetic_noise_db", -32)
        if preset in ("radio-cut", "radio-word"):
            options.setdefault("tuning", False)
            options.setdefault("highpass", 300)
            options.setdefault("lowpass", 4500)
            options.setdefault("mid_gain_db", 1.5)
            if DEFAULT_NOISE.is_file():
                options.setdefault("noise_file", DEFAULT_NOISE)
        return process_radio(samples, sample_rate, strength, seed, **options)

    settings = PRESETS[preset]
    rng = np.random.default_rng(seed)
    frames, channels = samples.shape
    tail = round(sample_rate * 0.30)
    length = max(16, round(sample_rate * settings["grain_ms"] / 1000))
    hop = length // 2
    wet = np.zeros((frames + tail, channels), dtype=np.float64)
    weights = np.zeros(frames + tail, dtype=np.float64)
    peak = float(np.max(np.abs(samples)))
    window = np.hanning(length)
    axis = np.arange(length)

    for start in range(-hop, frames, hop):
        left, right = max(0, start), min(frames, start + length)
        grain = np.zeros((length, channels), dtype=np.float64)
        grain[left - start:right - start] = samples[left:right]
        # Pitch/speed changes apply only to the added layer.
        ratio = 2 ** (rng.uniform(-settings["detune"], settings["detune"]) / 12)
        positions = axis * ratio
        shifted = np.column_stack([
            np.interp(positions, axis, grain[:, channel], left=0, right=0)
            for channel in range(channels)
        ])
        section = slice(left - start, right - start)
        wet[left:right] += shifted[section] * window[section, None] * rng.uniform(0.65, 1)
        weights[left:right] += window[section]
        if peak > 0 and np.max(np.abs(grain)) > peak * 0.08 and rng.random() < settings["repeats"]:
            count = min(length, round(sample_rate * rng.uniform(0.035, 0.070)))
            fragment = grain[:count] * np.hanning(count)[:, None]
            for repetition, gain in [(1, 0.45), (2, 0.22)]:
                destination = max(0, start) + round(sample_rate * settings["delay"] * repetition)
                count_out = min(count, len(wet) - destination)
                wet[destination:destination + count_out] += fragment[:count_out] * gain

    wet /= np.maximum(weights, 1.0)[:, None]
    high = min(settings["high"], sample_rate * 0.45)
    sos = signal.butter(2, [settings["low"], high], btype="bandpass", fs=sample_rate, output="sos")
    wet = signal.sosfilt(sos, wet, axis=0)
    if peak > 0:
        wet = np.tanh(wet / max(peak, 0.01) * 1.4) * peak / 1.4
    time = np.arange(len(wet)) / sample_rate
    wet *= (0.90 + 0.10 * np.sin(2 * np.pi * 4.7 * time))[:, None]
    offset = round(sample_rate * settings["delay"])
    wet[offset:] += wet[:-offset].copy() * 0.16

    dry = np.pad(samples, ((0, tail), (0, 0)))
    mix = strength * 0.70
    output = dry * (1 - mix) + wet * mix
    output_peak = float(np.max(np.abs(output)))
    if output_peak > 0.98:
        output *= 0.98 / output_peak
    return output.astype(np.float32)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("input", type=Path, help="existing voice recording")
    parser.add_argument("-o", "--output", type=Path, help="output WAV; default: INPUT_processed.wav")
    parser.add_argument("--preset", choices=PRESETS, default="radio-word")
    parser.add_argument("--strength", type=float, default=0.8, help="effect amount from 0 to 1; default 0.8")
    parser.add_argument("--seed", type=int, default=42, help="repeatable fragment variations")
    parser.add_argument("--highpass", type=float, default=None, help="radio high-pass cutoff in Hz")
    parser.add_argument("--lowpass", type=float, default=None, help="radio low-pass cutoff in Hz")
    parser.add_argument("--mid-gain-db", type=float, default=None, help="radio presence boost near 1.6 kHz; scaled by strength")
    parser.add_argument("--ratio", type=float, default=3.5, help="radio compressor ratio, default 3.5:1")
    parser.add_argument("--noise-db", type=float, default=None, help="static relative to speech: default -25 dB for radio-grain, -36 for radio")
    parser.add_argument("--noise-file", type=Path, help="use an existing static recording instead of synthetic noise")
    parser.add_argument("--tail-ms", type=float, default=180, help="radio-cut effect window at each detected phrase ending")
    parser.add_argument("--word-cut-ms", type=float, default=65, help="radio-word missing tail per word; capped at 32 percent of word duration")
    parser.add_argument("--word-model", choices=["ctc", "tiny.en", "base.en", "tiny", "base"], default="ctc")
    parser.add_argument("--transcript-file", type=Path, help="optional original script to help local word recognition")
    parser.add_argument("--synthetic-noise-db", type=float, default=None, help="extra synthetic static layer relative to voice; default -32 for radio-word")
    parser.add_argument("--grain-ms", type=float, default=45, help="radio-grain average slice size in milliseconds")
    parser.add_argument("--cut-depth", type=float, default=0.85, help="radio-grain gap depth from 0 to 1")
    parser.add_argument("--repeat-chance", type=float, default=0.45, help="radio-grain local stutter probability from 0 to 1")
    parser.add_argument("--no-tuning", action="store_true", help="omit the 0.18s tuning sound before and after speech")
    parser.add_argument("--overwrite", action="store_true", help="replace an existing output file")
    args = parser.parse_args()
    if not args.input.is_file():
        parser.error(f"input recording does not exist: {args.input}")
    if args.preset == "radio-word" and args.strength > 0 and args.word_model == "ctc" and not args.transcript_file:
        parser.error("word-by-word cuts require the spoken script: --transcript-file sounds.txt")
    if args.transcript_file and not args.transcript_file.is_file():
        parser.error(f"transcript does not exist: {args.transcript_file}")
    if not 0 <= args.strength <= 1:
        parser.error("--strength must be between 0 and 1")
    import math
    for name, value in [("highpass", 300 if args.preset in ("radio-cut", "radio-word") else 400),
                        ("lowpass", 4500 if args.preset in ("radio-cut", "radio-word") else 3800),
                        ("mid_gain_db", 1.5 if args.preset in ("radio-cut", "radio-word") else 4)]:
        if getattr(args, name) is None:
            setattr(args, name, value)
    if args.noise_db is None:
        args.noise_db = -25 if args.preset == "radio-grain" else -28 if args.preset in ("radio-cut", "radio-word") else -36
    if args.synthetic_noise_db is None and args.preset == "radio-word":
        args.synthetic_noise_db = -32
    if args.synthetic_noise_db is not None and not -100 <= args.synthetic_noise_db <= -12:
        parser.error("--synthetic-noise-db must be between -100 and -12")
    if not 10 <= args.word_cut_ms <= 150:
        parser.error("--word-cut-ms must be between 10 and 150")
    if args.noise_file is not None and not args.noise_file.is_file():
        parser.error(f"noise recording does not exist: {args.noise_file}")
    if not 40 <= args.tail_ms <= 500:
        parser.error("--tail-ms must be between 40 and 500")
    radio_values = [args.highpass, args.lowpass, args.mid_gain_db, args.ratio, args.noise_db]
    if not all(math.isfinite(value) for value in radio_values):
        parser.error("radio parameters must be finite numbers")
    if not 0 < args.highpass < args.lowpass:
        parser.error("require 0 < --highpass < --lowpass")
    if not 1 <= args.ratio <= 20:
        parser.error("--ratio must be between 1 and 20")
    if not -100 <= args.noise_db <= -12:
        parser.error("--noise-db must be between -100 and -12")
    if not -12 <= args.mid_gain_db <= 12:
        parser.error("--mid-gain-db must be between -12 and 12")
    if not 10 <= args.grain_ms <= 250:
        parser.error("--grain-ms must be between 10 and 250")
    if not 0 <= args.cut_depth <= 1 or not 0 <= args.repeat_chance <= 1:
        parser.error("--cut-depth and --repeat-chance must be between 0 and 1")
    output = args.output or args.input.with_name(args.input.stem + "_processed.wav")
    if output.resolve() == args.input.resolve():
        parser.error("output must differ from the original recording")
    if output.suffix.lower() != ".wav":
        parser.error("output must have a .wav extension")
    if output.exists() and not args.overwrite:
        parser.error(f"output already exists: {output}; use --overwrite to replace it")
    try:
        import soundfile as sf
        samples, sample_rate = read_recording(args.input)
        radio_options = dict(highpass=args.highpass, lowpass=args.lowpass, mid_gain_db=args.mid_gain_db,
                             ratio=args.ratio, noise_db=args.noise_db,
                             tuning=not args.no_tuning and args.preset not in ("radio-cut", "radio-word"),
                             grain_ms=args.grain_ms, cut_depth=args.cut_depth, repeat_chance=args.repeat_chance,
                             tail_ms=args.tail_ms, synthetic_noise_db=args.synthetic_noise_db)
        if args.preset == "radio-word" and args.strength > 0:
            prompt = args.transcript_file.read_text(encoding="utf-8-sig") if args.transcript_file else ""
            words = word_timings(samples, sample_rate, args.word_model, prompt)
            print(f"Cutting the tails of {len(words)} aligned words ({args.word_cut_ms:g} ms maximum).", flush=True)
            radio_options.update(words=words, word_cut_ms=args.word_cut_ms)
        if args.noise_file is not None:
            radio_options["noise_file"] = args.noise_file
        processed = process_voice(samples, sample_rate, args.preset, args.strength, args.seed, radio_options)
        output.parent.mkdir(parents=True, exist_ok=True)
        with tempfile.TemporaryDirectory(prefix="voice-effect-", dir=output.parent) as temporary:
            encoded = Path(temporary) / "processed.wav"
            sf.write(encoded, processed, sample_rate, subtype="PCM_16")
            encoded.replace(output)
    except ImportError as exc:
        raise SystemExit(f"Missing audio dependency: {exc}. Run with the project's .venv/bin/python. "
                         "Dependencies: numpy scipy soundfile") from exc
    except (ValueError, OSError, RuntimeError) as exc:
        raise SystemExit(f"Could not process recording: {exc}") from exc
    print(f"Saved {output} ({len(processed) / sample_rate:.2f}s, {sample_rate} Hz, {samples.shape[1]} channel(s))")


if __name__ == "__main__":
    # Direct shell execution should use the already installed project packages.
    environment = Path(__file__).resolve().parent.parent / ".venv"
    interpreter = environment / "bin" / "python"
    if interpreter.is_file() and Path(sys.prefix).resolve() != environment.resolve():
        os.execv(str(interpreter), [str(interpreter), str(Path(__file__).resolve()), *sys.argv[1:]])
    main()
