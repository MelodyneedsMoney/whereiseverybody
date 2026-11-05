# Sound generation

ConcatenationGAN 参考网站的真实模型：

```bash
python3 generat_sounds/concatenation_voice.py --seed 42
```

通过参考网页当前使用的公开模型接口生成，保存 `concatenation_reference.wav` 和
记录潜向量、自动识别文字的同名 JSON。不叠加滤波、变调等后期。
改变 `--seed` 可探索其他输出；`--latent-file` 可读取保存的 JSON 来重用潜向量。
依赖 Python 标准库和网络，不需要本地模型权重。公开接口的可用性可能变化。

**这个模型不是文字转语音，也不是录音转换模型。它不接收 `sounds.txt` 或录音，
无法保证说出 Patrick 等任意指定台词。自动识别文字只是输出，不能当作控制输入。**
下面的 `process_recording.py` 只是普通人声后期，不能复现此模型的生成音色。

处理现有录音（完全本地，不使用 AudioGen、TTS 或在线服务）。在项目根目录运行：

```bash
generat_sounds/process_recording.py recording.wav --transcript-file generat_sounds/sounds.txt
generat_sounds/process_recording.py recording.m4a --preset radio --ratio 4 --noise-db -40
```

默认 `radio-word` 预设：将原台词（`--transcript-file`，必须与录音内容一致）与录音
进行本地英文 CTC 强制对齐，再截断每个单词的词尾，包括重复词。默认最多切掉
65 ms，且不超过单词时长的 32%；原词序、录音总时长不变，不加变调和量化。
模型仅用于定位单词，不重新生成台词。首次下载约 360 MB 权重到 `.cache/torch/`，
之后复用本地权重和时间戳缓存。需要已有的 torch / torchaudio / scipy / soundfile。
`--word-model` 也提供可选的 Whisper 识别模式；这些模式另需安装 openai-whisper，
自动识别可能漏掉重复词，因此当前使用有台词的 CTC 对齐。

```bash
generat_sounds/process_recording.py test.mp3 --transcript-file generat_sounds/sounds.txt -o test_word_cut.wav
# 词尾缺失更多，同时让合成底噪更明显
generat_sounds/process_recording.py test.mp3 --transcript-file generat_sounds/sounds.txt -o stronger.wav --word-cut-ms 90 --synthetic-noise-db -28
```

此预设同时叠加你提供的真实电台底噪（默认 -28 dB）和合成静电嘶声、随机电流爆点、
轻微电流声（默认 -32 dB）；数值相对有效人声 RMS，并随 strength 缩放。
`--noise-db` 控制素材底噪，`--synthetic-noise-db` 控制合成底噪；设为 -100 可近似静音。
两层底噪都持续播放，不随词尾截断。

上一版 `radio-cut` 预设：保留句中连续人声，关闭变调、量化和音节循环，降低饱和与
中频提升。按能量检测相隔至少 220 ms 停顿的人声段，仅在每段结尾约 180 ms
加入几次掉线，最后约 35 ms 快速切断。它不是语音识别，较长的句中停顿也可能
被识别为段落边界；短句的处理窗口会缩短，避免吞掉整句。

默认底噪使用你提供的 `assets/50750__rutgermuller__radio-noise.wav`（rutgermuller），
已复制到项目中，不依赖 Downloads 路径。底噪持续播放，不随人声切断。
长录音会循环底噪并在接缝交叉淡化。默认不加额外合成调台声。

```bash
generat_sounds/process_recording.py test.mp3 --preset radio-cut -o test_radio_cut.wav
# 调低底噪 / 缩短结尾切割窗口
generat_sounds/process_recording.py test.mp3 --preset radio-cut -o quieter.wav --noise-db -34 --tail-ms 120
# 指定另一段真实底噪
generat_sounds/process_recording.py test.mp3 --preset radio-cut -o custom.wav --noise-file your_static.wav
```

旧版 `radio-grain` 预设：在下述电台处理上加平均 45 ms 的不规则切片、
3–9 ms 的短断口、局部音节重复、采样保持和量化颗粒；原台词主线保持顺序，
重复只发生在当前短片段内。静电底噪包括连续嘶声、轻微起伏和零星电流爆点，
在人声断口里仍持续。默认 `--strength 0.8 --noise-db -25`（静电 RMS 约低于
有效人声 27 dB）。会降低部分字音的清晰度，效果不保证复现 GAN 的发声。

```bash
generat_sounds/process_recording.py test.mp3 -o test_radio_grain.wav
# 更密的切片、更明显的静电噪声
generat_sounds/process_recording.py test.mp3 -o stronger.wav --grain-ms 30 --strength 0.95 --noise-db -22
```

`--grain-ms` 控制切片长度，越短越碎；`--cut-depth` 控制断口深度；
`--repeat-chance` 控制局部重复概率。使用 `--preset radio --strength 0.65`
可以回到上一版平滑的电台效果（不切片、不变调、不重复）。

`radio` 基础处理：400 Hz 高通、3.8 kHz 低通、约 1.6 kHz 的宽中频提升、
轻度软饱和与 3.5:1 压缩（-24 dBFS 阈值、8 ms 启动、120 ms 释放），
加上比有效人声 RMS 低约 40 dB 的底噪和更低的 60/120 Hz 电流声。
中频提升和饱和随 `--strength` 调整。底噪在本地合成，不需要下载素材。
人声前后各加 0.18 秒调台声；`--no-tuning` 关闭它并保留原时长。
`--highpass`、`--lowpass`、`--mid-gain-db`、`--ratio`、`--noise-db` 可以分别调整。
radio 预设不重复台词、不变调、不加回声。

默认输出 `recording_processed.wav`，保留原录音。输出已存在时需要 `--overwrite`。
`--strength 0` 完全旁通，不添加底噪或延长时长。
旧的碎片化预设仍可用：`fragile`、`subtle`、`underwater`，这些会增加 0.3 秒尾音。
所有后期预设都是效果处理，并非参考网站的 GAN 模型。

输入 WAV、AIFF、FLAC 等；M4A 等格式在 macOS 上通过 `afconvert` 解码，
也可使用已安装的 FFmpeg。依赖只有 `numpy scipy soundfile`，当前 `.venv` 已安装。
不会读取 `sounds.txt` 或生成新的台词；需要提供你自己的录音文件。

From this directory:

```bash
python3 sound_gen.py
```

The default command uses the public hosted
[AudioGen demo](https://huggingface.co/spaces/fffiloni/audiogen) and downloads
only the resulting WAV files. It needs Python 3.10+ and internet access, with
no Python packages, model downloads, or API key required. The demo is a shared
service, so availability, queues, and usage limits apply.
The script uses `HF_TOKEN` or an existing Hugging Face CLI login when available
for authenticated GPU quota; it never displays the token.

It generates three five-second WAVs in `generated_sounds/`:
a dog barking, an emergency vehicle siren, and footsteps in a corridor.

To generate a custom sound:

```bash
python3 sound_gen.py "Rain falling on a metal roof" --duration 5
```

To use a script of sound descriptions, create `sounds.txt` with one cue per line:

```text
Rain falling on a metal roof
A wooden door creaking open
Footsteps echoing in an empty corridor
```

```bash
python3 sound_gen.py --input-file sounds.txt --duration 5
```

Each nonempty line generates a separate numbered WAV, in order. Blank lines are
ignored. You can also pipe text using `--input-file -` or pass quoted multiline
text as a positional argument. AudioGen treats each line as a sound description;
it does not read dialogue aloud or infer a timed soundtrack from a screenplay.

For inference entirely on this machine:

```bash
./setup_sound_gen.sh
.venv/bin/python sound_gen.py --backend local
```

Local setup requires `uv`. On Apple Silicon it installs native Python 3.10
inside `.python/`, avoiding Intel emulation. The first local run downloads Meta's
`facebook/audiogen-medium` model and its text encoder into `.cache/` (several GB).
Later runs reuse those weights. Local generation runs on CPU by default;
no API key is needed. CPU generation can take several minutes.
`--device cuda` and `--device mps` are available when supported by your PyTorch
installation and hardware.

AudioCraft 1.3 pins CUDA-only `xformers` and an older PyAV release. The setup
installs Mac-compatible dependencies and applies `patch_audiocraft.py` to use
AudioCraft's existing PyTorch attention backend without `xformers`. WAV export
uses Python's standard library and does not require FFmpeg.
`requirements-sound-lock.txt` records the complete installed environment;
`requirements-sound.txt` documents the direct dependencies.

Model weights use Meta's CC BY-NC 4.0 license; see the
[AudioGen model card](https://huggingface.co/facebook/audiogen-medium).
