# Where Is Everybody?

An interactive radio transmission with scroll-driven imagery, grain/glitch,
synchronized subtitles, and a timed ending. Everything runs locally in the browser.

## Run

Serve this project folder with VS Code Live Server and open `/interactive/`.
Alternatively, run `python3 -m http.server 5500` here and visit
`http://127.0.0.1:5500/interactive/`.

No build, npm install, API key, or model download is required. Edit source files,
save, and refresh. The old `/interactive/dist/` URL redirects to the source page.

- `interactive/index.html`: page and play button.
- `interactive/src/`: editable JavaScript, CSS, local Three.js, font, and LUTs.
- `interactive/sounds/`: browser-ready audio and ambience.
- `asset/`: staged image assets used by the experience.
- `generat_sounds/sounds.txt`: seven subtitle lines.

See [interaction and timing details](interactive/README.md) and
[credits and licensing](interactive/ATTRIBUTION.md).
