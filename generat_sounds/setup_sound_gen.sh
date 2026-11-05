#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
export UV_CACHE_DIR="$PWD/.cache/uv"
export UV_PYTHON_INSTALL_DIR="$PWD/.python"
export UV_PYTHON_BIN_DIR="$PWD/.python-bin"
python_target=3.10
if [[ "$(uname -s)" == Darwin && "$(uname -m)" == arm64 ]]; then
    python_target=cpython-3.10-macos-aarch64-none
    uv python install "$python_target"
fi
uv venv --python "$python_target" --allow-existing .venv
# The complete lock includes transitive packages. Skip upstream resolution because
# AudioCraft declares CUDA-only and training/UI dependencies unused for inference.
uv pip install --python .venv/bin/python --no-deps -r requirements-sound-lock.txt
.venv/bin/python patch_audiocraft.py
echo 'Ready: .venv/bin/python sound_gen.py'
