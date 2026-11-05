# Where Is Everybody? / DEAD AIR

This page runs directly from its source files. There is no build step or generated
JavaScript/CSS to edit.

## Open and edit

Use the existing VS Code Live Server and open `/interactive/` (for example,
`http://127.0.0.1:5500/interactive/`). The former `/interactive/dist/` address
redirects here. Save changes and refresh; Live Server may also refresh for you.
A local HTTP server is required for JavaScript modules; do not double-click the HTML.
If needed, run `python3 -m http.server 5500` from the parent project folder.

- `index.html`: page title, play triangle and circle markup.
- `src/style.css`: play-button size/color, subtitle layout and all page styling.
- `src/visual.js`: glitch composition, bloom, scroll, crop/zoom and ending timeline.
- `src/signal-break.js`: the active signal-tearing shader.
- `src/radio-audio.js`: audio queue, scroll thresholds and media-synchronized captions.
- `sounds/`: browser-ready seq1–seq7 MP3 files and radio_bg.wav; no conversion needed.
- `src/vendor/`: local Three.js rendering dependencies; no CDN or package installation.
- `src/assets/`: Chicago font and two monochrome LUTs.
- `../asset/`: b1.png, b2.png, 2.png, 4.png, test5.png and 6.png.
- `../generat_sounds/sounds.txt`: seven subtitle lines, loaded directly on refresh.

Keep this directory inside the project so the image and subtitle paths stay valid.

## Current interaction

Play unlocks ambience and scrolling. A gesture counts once after 80 px, with a
140 ms pause to start a new gesture. From 2.png onward this becomes 40 px / 90 ms.
One non-repeated arrow-key press also counts once. Continuous scrolling is not
counted repeatedly. Before Play, the idle glitch runs but input does not count.

Seq1 requires five counts and at least six seconds after Play. Subsequent clip
thresholds are 10, 13 and 19. Seq3 shows b2; two more counts show the registered
crop of 2.png. Ten more counts zoom 2.png out to viewport width, matching 4.png.
The next count displays 4.png and releases seq5, holding the audio count at 22
until seq5 ends. Clips always play in order without overlap.

After seq5, the next count triggers a 0.2-second full-screen glitch into the
registered test5 crop. Ten further counts reveal all of test5. It then stays
for five seconds, followed by 0.5 seconds of black and full-screen 6.png.
Seq6 retains its two-count threshold after seq5. Seq7 unlocks 0.5 seconds after
6.png has painted, 1.5 seconds earlier than before; it waits for earlier audio.

Seq7's subtitle follows its spoken interval at media time 2.1–3.7 seconds,
including playback stalls/resumes. Three seconds after speech ends, the screen
turns fully black and all audio stops. Further input cannot restart ambience.
Reload to restart the experience.

All glitch images share b2's film/afterimage/LUT/bloom composition. For the radio
illustrations, the fully blended effect is masked to the CRT glass; the frame
and surrounding artwork retain source colors. b2 transitions into 2.png with a
0.5-second crossfade of its actual outgoing composition. The yellow UI stays
outside these effects. Existing button and subtitle styling is preserved.

Credits and dependency licensing: [ATTRIBUTION.md](ATTRIBUTION.md).
