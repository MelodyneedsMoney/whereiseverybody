"""Allow AudioCraft 1.3's torch attention backend without CUDA-only xformers."""
from importlib.metadata import distribution


def main():
    package = distribution("audiocraft")
    if package.version != "1.3.0":
        raise SystemExit("This compatibility patch requires audiocraft==1.3.0")
    path = package.locate_file("audiocraft/modules/transformer.py")
    source = path.read_text()
    replacements = {
        "from xformers import ops": (
            "try:\n    from xformers import ops\n"
            "except ImportError:\n    ops = None"
        ),
        "        if memory_efficient:\n            _verify_xformers_memory_efficient_compat()": (
            "        if memory_efficient and _efficient_attention_backend == 'xformers':\n"
            "            _verify_xformers_memory_efficient_compat()"
        ),
        "q, k, v = ops.unbind(packed, dim=2)": (
            "q, k, v = torch.unbind(packed, dim=2)"
        ),
    }
    if "except ImportError:\n    ops = None" in source:
        print("AudioCraft torch attention compatibility patch already applied")
        return
    for old, new in replacements.items():
        if old not in source:
            raise SystemExit(f"Unexpected AudioCraft source; missing {old!r}")
        source = source.replace(old, new)
    path.write_text(source)
    print("Patched AudioCraft to support torch attention without xformers")


if __name__ == "__main__":
    main()
