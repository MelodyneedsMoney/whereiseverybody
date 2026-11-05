// DEAD AIR: the current monochrome composition and scroll-driven transmission.
import{a as Scene,f as Color,O as OrthographicCamera,W as WebGLRenderer,E as EffectComposer,e as RenderPass,g as Vector2,V as Vector3,d as MeshBasicMaterial,b as Mesh,i as PolarGridHelper,n as PlaneGeometry,C as CanvasTexture,S as SRGBColorSpace}from"./vendor/three.js";
import{F as FilmPass,R as RenderPixelatedPass,A as AfterimagePass,U as UnrealBloomPass,L as LUTCubeLoader,a as LUTPass}from"./vendor/effects.js";

import {SignalBreakPass} from "./signal-break.js";
import {RadioTransmission} from "./radio-audio.js";

// Keep the original blended visual layers together, separate from yellow UI.
const visualStage = document.createElement('div');
visualStage.id = 'visual-stage';
document.body.appendChild(visualStage);
// Blend first, then apply b2's shared black/white treatment and CRT mask.
const effectStage = document.createElement('div');
effectStage.style.cssText = 'position:fixed;inset:0;z-index:1;background:#000;isolation:isolate;pointer-events:none';
visualStage.appendChild(effectStage);

const extent = 30;
const FINAL_AUDIO_DELAY_MS = 500; // 1.5 seconds earlier than the previous 2-second delay.
let aspect = innerWidth / innerHeight;
let experienceStarted = false;

function createLayer({alpha = false, style, background}) {
  const scene = new Scene();
  if (background !== undefined) scene.background = new Color(background);
  const camera = new OrthographicCamera(-extent * aspect / 2, extent * aspect / 2, extent / 2, -extent / 2, 0.1, 1000);
  camera.position.set(0, 20, 0);
  camera.lookAt(0, 0, 0);
  const renderer = new WebGLRenderer({antialias: true, alpha});
  renderer.setSize(innerWidth, innerHeight);
  renderer.domElement.style.cssText = `position:fixed;left:0;top:0;opacity:1;${style}`;
  effectStage.appendChild(renderer.domElement);
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  return {scene, camera, renderer, composer};
}

// Preserve the three original layer stacks and their order of creation.
const foreground = createLayer({background: 0x383838, style: 'z-index:2;mix-blend-mode:difference;'});
foreground.composer.addPass(new RenderPixelatedPass(2, foreground.scene, foreground.camera));
foreground.composer.addPass(new FilmPass(0.2, 0, 648, false));
foreground.composer.addPass(new AfterimagePass(0.999));
foreground.composer.addPass(new FilmPass(0.4, 0.1, 1, false));

const background = createLayer({alpha: true, style: 'z-index:0;mix-blend-mode:normal;filter:blur(0px);'});
background.renderer.domElement.style.zIndex = '1';
background.composer.addPass(new RenderPixelatedPass(1, background.scene, background.camera));
const backdropBloomFine = new UnrealBloomPass(new Vector2(innerWidth, innerHeight), 0.45, 0.4, 0.2);
background.composer.addPass(backdropBloomFine);
const backdropTrail = new AfterimagePass(0.9999);
background.composer.addPass(backdropTrail);
const backdropNoise = new FilmPass(0.2, 0, 100, false);
background.composer.addPass(backdropNoise);

// This layer's geometry was hidden in the current visual; its film/glitch
// passes remain visible and are part of the composition.
const upper = createLayer({alpha: true, style: 'z-index:3;mix-blend-mode:exclusion;filter:blur(0px) invert(1);'});
const upperPixels = new RenderPixelatedPass(3, upper.scene, upper.camera);
upper.composer.addPass(upperPixels);
upper.composer.addPass(new FilmPass(200, 0, 648, false));
upper.composer.addPass(new FilmPass(200, 0.8, 648, false));
upper.composer.addPass(new AfterimagePass(0.99));
upper.composer.addPass(new FilmPass(200, 0.8, 648, true));
upper.composer.addPass(new FilmPass(0.4, 0.1, 1, false));
upperPixels.setPixelSize(4);

new LUTCubeLoader().load(new URL('./assets/mono06.cube', import.meta.url).href, result => {
  foreground.composer.addPass(new LUTPass({lut: result.texture3D, intensity: 1}));
});
let backdropLut = null;
new LUTCubeLoader().load(new URL('./assets/mono01.cube', import.meta.url).href, result => {
  backdropLut = new LUTPass({lut: result.texture3D, intensity: 1});
  background.composer.addPass(backdropLut);
  upper.composer.addPass(new LUTPass({lut: result.texture3D, intensity: 1}));
});

function grid(args, x, y, z) {
  const mesh = new PolarGridHelper(...args);
  mesh.rotation.y = Math.PI / 2;
  mesh.position.set(x, y, z);
  foreground.scene.add(mesh);
  return mesh;
}

const largeA = grid([4000, 200, 200, 300, '#000000', '#000000'], 100, -1, 0);
const largeB = grid([4000, 200, 100, 300, '#000000', '#000000'], 0, -1, 100);
const largeC = grid([4000, 300, 300, 300, '#000000', '#000000'], -100, -2, 0);
const smallA = grid([400, 200, 200, 3, '#202020', '#202020'], 100, -1, 0);
const smallB = grid([400, 200, 100, 3, '#000000', '#202020'], 0, -1, 100);
const smallC = grid([100, 300, 300, 10, '#202020', '#202020'], -100, -2, 0);

const backdrop = new Mesh(new PlaneGeometry(1, 1), new MeshBasicMaterial({color: 0xffffff}));
backdrop.rotation.x = -Math.PI / 2;
backdrop.position.set(0, -900, 0);
backdrop.visible = false;
background.scene.add(backdrop);
let backdropAspect = 1;
// Crop registration against b2.png keeps the white shape in the same place
// when the full illustration replaces that reference after the b2 stage.
const initialCrop = {left: 0.068722, top: 0.143583, width: 1 / 1.588403, height: 1 / 1.630011};
const nestedCrop = {left: 0.334269, top: 0.311095, width: 1 / 3.748006, height: 1 / 3.986998};
const revealSteps = 10;
let revealActive = false;
let b2Scrolls = 0;
let pendingFour = false;
let sequence5Finished = false;
let revealStep = 0;
let revealProgress = 0;
let targetRevealProgress = 0;
let backdropChanged = false;
let cleanBackdrop = null;
let screenMask = null;
let appliedScreenMask = null;
const frameCanvas = document.createElement('canvas');
frameCanvas.style.cssText = 'position:fixed;inset:0;z-index:0;pointer-events:none;display:none';
frameCanvas.setAttribute('aria-hidden', 'true');
visualStage.appendChild(frameCanvas);

function updateScreenMask() {
  const layers = [background, foreground, upper];
  if (!cleanBackdrop || requestedBackdrop < 2) {
    frameCanvas.style.display = 'none';
    for (const {renderer} of layers) {
      renderer.domElement.style.maskImage = 'none';
      renderer.domElement.style.webkitMaskImage = 'none';
    }
    effectStage.style.maskImage = effectStage.style.webkitMaskImage = 'none';
    effectStage.style.display = 'block';
    appliedScreenMask = null;
    return;
  }
  effectStage.style.display = requestedBackdrop >= 5 ? 'none' : 'block';
  const width = backdrop.scale.x / (extent * aspect) * innerWidth;
  const height = backdrop.scale.y / extent * innerHeight;
  const left = innerWidth / 2 + backdrop.position.x / (extent * aspect) * innerWidth - width / 2;
  const top = innerHeight / 2 + backdrop.position.z / extent * innerHeight - height / 2;
  if (frameCanvas.width !== innerWidth) frameCanvas.width = innerWidth;
  if (frameCanvas.height !== innerHeight) frameCanvas.height = innerHeight;
  const context = frameCanvas.getContext('2d');
  context.fillStyle = '#000';
  context.fillRect(0, 0, innerWidth, innerHeight);
  context.drawImage(cleanBackdrop, left, top, width, height);
  frameCanvas.style.display = 'block';
  // Mask the finished blend, not each constituent layer. That preserves
  // the same difference/exclusion interaction used by the full-frame b2.
  const style = effectStage.style;
  if (appliedScreenMask !== screenMask) style.maskImage = style.webkitMaskImage = screenMask ? `url("${screenMask}")` : 'none';
  style.maskSize = style.webkitMaskSize = `${width}px ${height}px`;
  style.maskPosition = style.webkitMaskPosition = `${left}px ${top}px`;
  style.maskRepeat = style.webkitMaskRepeat = 'no-repeat';
  // Preserve the shared b2 noise and thin-line overlay strength.
  background.renderer.domElement.style.opacity = '1';
  foreground.renderer.domElement.style.opacity = '1';
  upper.renderer.domElement.style.opacity = '1';
  appliedScreenMask = screenMask;
  // Pattern coordinates travel with the illustration, not with the viewport.
  for (const pass of [signalBreak, upperBreak]) {
    pass.uniforms.imageRect.value.set([left / innerWidth, 1 - (top + height) / innerHeight,
                                     width / innerWidth, height / innerHeight]);
  }
}

function createScreenMask(image, index) {
  if (index < 2 || index > 4) return null;
  const mask = document.createElement('canvas');
  mask.width = image.naturalWidth;
  mask.height = image.naturalHeight;
  const context = mask.getContext('2d');
  const glass = new Path2D('M .10 .14 C .25 .12 .53 .12 .69 .14 C .735 .30 .75 .66 .705 .80 C .54 .835 .25 .835 .105 .80 C .065 .65 .06 .30 .10 .14 Z');
  context.scale(mask.width, mask.height);
  if (index === 4) {
    context.translate(nestedCrop.left, nestedCrop.top);
    context.scale(nestedCrop.width, nestedCrop.height);
  }
  context.fillStyle = '#fff';
  context.fill(glass);
  return mask.toDataURL('image/png');
}

function fitBackdrop() {
  const coverHeight = Math.max(extent, extent * aspect / backdropAspect);
  // Keep the current bloom tuning and shared b2 composition.
  // Use b2's exact LUT and compositing treatment for every glitch image.
  // The clean frame remains outside this group, retaining its original colors.
  visualStage.style.filter = 'none';
  effectStage.style.filter = 'invert(1) brightness(1) contrast(1.4)';
  if (backdropLut) backdropLut.intensity = 1;
  if (requestedBackdrop !== 2 && requestedBackdrop !== 4) {
    const height = requestedBackdrop === 3 ? extent * aspect / backdropAspect : coverHeight;
    backdrop.scale.set(height * backdropAspect, height, 1);
    backdrop.position.set(0, -900, 0);
    updateScreenMask();
    return;
  }
  // End at contain rather than cover, so no edge of the full image is cropped.
  const fullHeight = requestedBackdrop === 2 ? extent * aspect / backdropAspect : Math.min(extent, extent * aspect / backdropAspect);
  const crop = requestedBackdrop === 4 ? nestedCrop : initialCrop;
  // test5 starts aligned to the width-fitted 4.png, then reveals to contain.
  const referenceHeight = requestedBackdrop === 4 ? extent * aspect / backdropAspect : coverHeight;
  const startWidth = referenceHeight * backdropAspect / crop.width;
  const startHeight = referenceHeight / crop.height;
  const width = startWidth * (fullHeight * backdropAspect / startWidth) ** revealProgress;
  const height = startHeight * (fullHeight / startHeight) ** revealProgress;
  const focusX = (crop.left + crop.width / 2) * (1 - revealProgress) + 0.5 * revealProgress;
  const focusY = (crop.top + crop.height / 2) * (1 - revealProgress) + 0.5 * revealProgress;
  backdrop.scale.set(width, height, 1);
  backdrop.position.set(width * (0.5 - focusX), -900, height * (0.5 - focusY));
  updateScreenMask();
}
let requestedBackdrop = 0;
const backdrops = ['../../asset/b1.png', '../../asset/b2.png', '../../asset/2.png', '../../asset/4.png', '../../asset/test5.png', '../../asset/6.png'].map((source, index) => new Promise((resolve, reject) => {
  const image = new Image();
  image.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);
    const texture = new CanvasTexture(canvas);
    texture.colorSpace = SRGBColorSpace;
    const mask = createScreenMask(image, index);
    resolve({texture, canvas, mask, aspect: canvas.width / canvas.height});
  };
  image.onerror = () => reject(new Error('Could not load background image.'));
  image.src = new URL(source, import.meta.url).href;
}));
function setBackdrop(index) {
  requestedBackdrop = index;
  return backdrops[index].then(result => {
    if (requestedBackdrop !== index) return false;
    radio.easyImageScroll = index >= 2;
    backdrop.material.map = result.texture;
    backdrop.material.needsUpdate = true;
    backdropChanged = true;
    backdropAspect = result.aspect;
    cleanBackdrop = result.canvas;
    screenMask = result.mask;
    fitBackdrop();
    backdrop.visible = true;
    return true;
  }).catch(error => {console.error(error); return false;});
}
setBackdrop(0);

// Two moving crosshair lines in the foreground.
import{j as LineBasicMaterial,k as BufferGeometry,l as LineSegments}from"./vendor/three.js";
const crosshairMaterial = new LineBasicMaterial({color: 0xffffff});
const horizontal = new LineSegments(new BufferGeometry().setFromPoints([
  new Vector3(-100, 0.1, 0), new Vector3(100, 0.1, 0)
]), crosshairMaterial);
const vertical = new LineSegments(new BufferGeometry().setFromPoints([
  new Vector3(0, 0.1, -100), new Vector3(0, 0.1, 100)
]), crosshairMaterial);
foreground.scene.add(horizontal, vertical);

// Append the active tear passes before the asynchronously loaded LUTs.
const signalBreak = new SignalBreakPass();
foreground.composer.addPass(signalBreak);
const upperBreak = new SignalBreakPass();
upper.composer.addPass(upperBreak);
const radio = new RadioTransmission(sequence => {
  if (sequence === 3) {
    revealActive = false;
    b2Scrolls = 0;
    pendingFour = sequence5Finished = false;
    revealStep = revealProgress = targetRevealProgress = 0;
    setBackdrop(1);
  }
}, document.getElementById('subtitles'), () => {
  if (transitionActive || endingPhase) return;
  if (requestedBackdrop === 1) {
    b2Scrolls++;
    if (b2Scrolls === 2) {
      revealActive = true;
      beginB2Bridge();
      setBackdrop(2);
    }
    return;
  }
  if (requestedBackdrop === 3) {
    if (sequence5Finished) {
      beginRadioTransition();
    }
    return;
  }
  if (!revealActive) return;
  if (revealStep >= revealSteps) {
    if (requestedBackdrop === 2) {
      pendingFour = true;
      if (revealProgress === 1) showFour();
    }
    return;
  }
  revealStep++;
  targetRevealProgress = revealStep / revealSteps;
}, sequence => {
  if (sequence === 5) sequence5Finished = true;
}, beginFinalHold);
function showFour() {
  if (requestedBackdrop !== 2) return;
  pendingFour = false;
  revealActive = false;
  setBackdrop(3).then(shown => {if (shown) radio.releaseSequence5();});
}
// Fade the actual outgoing b2 composition over the incoming registered crop.
// This retains its noise/line positions while the outside-screen noise fades.
const b2Bridge = document.createElement('canvas');
b2Bridge.style.cssText = 'z-index:14;pointer-events:none;display:none';
document.body.appendChild(b2Bridge);
let b2BridgeAt = null;
function beginB2Bridge() {
  b2Bridge.width = innerWidth;b2Bridge.height = innerHeight;
  const composite = document.createElement('canvas');
  composite.width = innerWidth;composite.height = innerHeight;
  const ctx = composite.getContext('2d');
  ctx.fillStyle = '#000';ctx.fillRect(0,0,innerWidth,innerHeight);
  for (const [layer, blend] of [[background,'source-over'],[foreground,'difference'],[upper,'exclusion']]) {
    // Read each WebGL canvas immediately after rendering; no permanent
    // preserveDrawingBuffer allocation is needed for this short handoff.
    layer.composer.render(0);
    ctx.globalCompositeOperation = blend;
    ctx.filter = layer.renderer.domElement.style.filter || 'none';
    ctx.drawImage(layer.renderer.domElement,0,0,innerWidth,innerHeight);
  }
  const output = b2Bridge.getContext('2d');
  output.filter = effectStage.style.filter || 'none';
  output.drawImage(composite,0,0);
  b2Bridge.style.display = 'block';b2Bridge.style.opacity = '1';
  b2BridgeAt = performance.now();
}
function updateB2Bridge(now) {
  if (b2BridgeAt === null) return;
  const progress = Math.min(1,(now-b2BridgeAt)/500);
  const eased = progress*progress*(3-2*progress);
  b2Bridge.style.opacity = String(1-eased);
  if (progress===1 || requestedBackdrop!==2) {
    b2Bridge.style.display='none';b2BridgeAt=null;
  }
}

// A brief unmasked signal break joins the two radio scales.
let transitionActive = false;
let transitionStarted = 0;
let transitionSwitched = false;
let transitionReady = false;
let transitionNoiseAt = -Infinity;
const transitionCanvas = document.createElement('canvas');
transitionCanvas.id = 'radio-transition';
transitionCanvas.style.cssText = 'z-index:15;pointer-events:none;display:none';
document.body.appendChild(transitionCanvas);
let endingPhase = '';
let endingAt = 0;
const blackout = document.createElement('div');
blackout.style.cssText = 'position:fixed;inset:0;background:#000;z-index:50;display:none;pointer-events:none';
document.body.appendChild(blackout);
function beginRadioTransition() {
  transitionActive = true;
  transitionStarted = performance.now();
  transitionSwitched = transitionReady = false;
  revealActive = false;
  transitionCanvas.style.display = 'block';
}
function updateRadioTransition(now) {
  if (!transitionActive) return;
  const elapsed = now - transitionStarted;
  if (!transitionSwitched && elapsed >= 75) {
    transitionSwitched = true;
    revealStep = revealProgress = targetRevealProgress = 0;
    setBackdrop(4).then(shown => {transitionReady = shown;});
  }
  if (elapsed >= 200 && transitionReady) {
    transitionActive = false;
    transitionCanvas.style.display = 'none';
    revealActive = true;
    return;
  }
  if (now - transitionNoiseAt < 45) return;
  transitionNoiseAt = now;
  const width = 640, height = Math.max(1, Math.round(width * innerHeight / innerWidth));
  if (transitionCanvas.width !== width) transitionCanvas.width = width;
  if (transitionCanvas.height !== height) transitionCanvas.height = height;
  const ctx = transitionCanvas.getContext('2d');
  ctx.fillStyle = '#000';ctx.fillRect(0, 0, width, height);
  if (frameCanvas.width) ctx.drawImage(frameCanvas, 0, 0, width, height);
  // Duplicate and displace broad strips of the entire picture, not the CRT mask.
  for (let i = 0; i < 14; i++) {
    const y = Math.random() * height, h = 2 + Math.random() * height * .09;
    const shift = (Math.random() - .5) * width * .38;
    ctx.drawImage(transitionCanvas, 0, y, width, h, shift, y, width, h);
  }
  const noise = ctx.createImageData(width, height);
  for (let i = 0; i < noise.data.length; i += 4) {
    const value = Math.random() > .5 ? 235 : 20;
    noise.data[i] = noise.data[i + 1] = noise.data[i + 2] = value;
    noise.data[i + 3] = Math.random() * 100;
  }
  const layer = document.createElement('canvas');layer.width=width;layer.height=height;
  layer.getContext('2d').putImageData(noise,0,0);ctx.drawImage(layer,0,0);
  ctx.fillStyle = 'rgba(255,255,255,.65)';
  for(let i=0;i<5;i++)ctx.fillRect(0,Math.random()*height,width,1+Math.random()*3);
}
function beginFinalHold() {
  if (endingPhase !== 'six') return;
  endingPhase = 'final-hold';
  endingAt = performance.now();
}


function updateEnding(now) {
  if (endingPhase === 'final-hold' && now - endingAt >= 3000) {
    endingPhase = 'finished';
    blackout.style.display = 'block';
    radio.stop();
    return;
  }

  if (!endingPhase && requestedBackdrop === 4 && revealStep === revealSteps && revealProgress === 1) {
    revealActive = false;
    endingPhase = 'test5-hold';
    endingAt = now;
  } else if (endingPhase === 'test5-hold' && now - endingAt >= 5000) {
    endingPhase = 'black';endingAt = now;
    blackout.style.display = 'block';
  } else if (endingPhase === 'black' && now - endingAt >= 500) {
    endingPhase = 'loading-six';
    setBackdrop(5).then(shown => {
      if (!shown) return;
      blackout.style.display = 'none';
      endingPhase = 'six-paint';
    });
  } else if (endingPhase === 'six-paint') {
    // Start the audio wait when the revealed 6.png gets its first frame.
    endingPhase = 'six-wait';
    endingAt = now;
  } else if (endingPhase === 'six-wait' && now - endingAt >= FINAL_AUDIO_DELAY_MS) {
    endingPhase = 'six';
    radio.releaseSequence7();
  }
}

const playButton = document.getElementById('play-button');
playButton.addEventListener('click', async () => {
  if (experienceStarted) return;
  playButton.disabled = true;
  await radio.unlock();
  if (!radio.enabled) {
    playButton.disabled = false;
    playButton.setAttribute('aria-label', 'Try again to play DEAD AIR');
    return;
  }
  experienceStarted = true;
  document.body.classList.add('started');
  playButton.hidden = true;
  radio.beginGesture();
  previousFrame = performance.now();
});
window.addEventListener('pointerdown', () => {if (experienceStarted) radio.unlock();});

const position = new Vector3(0, 0.2, 0);
const target = position.clone();
let scrollVelocity = 0;
let scrollEnergy = 0;
let scrollDirection = 1;
let fingerY = null;
let previousFrame = performance.now();
let visualTime = 0;
const motionReduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

function scrollSignal(delta) {
  if (!Number.isFinite(delta) || delta === 0) return;
  scrollDirection = Math.sign(delta);
  if (Math.sign(scrollVelocity) !== scrollDirection) scrollVelocity = 0;
  scrollVelocity = scrollDirection * Math.min(20, Math.abs(scrollVelocity) + Math.min(180, Math.abs(delta)) * 0.035);
  scrollEnergy = Math.min(1, scrollEnergy + Math.abs(delta) * 0.005);
}

window.addEventListener('wheel', event => {
  event.preventDefault();
  if (!experienceStarted) return;
  const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1);
  scrollSignal(delta);
  radio.wheel(delta);
  radio.unlock();
}, {passive: false});
window.addEventListener('touchstart', event => {
  if (!experienceStarted) return;
  fingerY = event.touches[0].clientY;
  radio.beginGesture();
  radio.unlock();
}, {passive: true});
window.addEventListener('touchmove', event => {
  if (fingerY === null) return;
  event.preventDefault();
  const y = event.touches[0].clientY;
  const delta = (fingerY - y) * 2;
  scrollSignal(delta);
  radio.wheel(fingerY - y, performance.now(), false);
  fingerY = y;
}, {passive: false});
for (const type of ['touchend', 'touchcancel']) {
  window.addEventListener(type, () => {fingerY = null;}, {passive: true});
}
window.addEventListener('keydown', event => {
  if (!experienceStarted) return;
  radio.unlock();
  if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    event.preventDefault();
    scrollSignal(event.key === 'ArrowUp' ? -100 : 100);
    if (!event.repeat) radio.countScroll();
  }
});

function animate() {
  const now = performance.now();
  if (endingPhase === 'finished') return;
  requestAnimationFrame(animate);
  const wallDelta = Math.min(0.05, (now - previousFrame) / 1000);
  previousFrame = now;
  updateB2Bridge(now);
  updateRadioTransition(now);
  radio.syncCaption();
  updateEnding(now);
  if (endingPhase === 'finished') return;
  let backdropMoving = backdropChanged;
  if (revealProgress !== targetRevealProgress) {
    backdropMoving = true;
    revealProgress = motionReduced ? targetRevealProgress
      : revealProgress + (targetRevealProgress - revealProgress) * (1 - Math.exp(-5 * wallDelta));
    if (Math.abs(revealProgress - targetRevealProgress) < 0.0001) revealProgress = targetRevealProgress;
    fitBackdrop();
  }
  // Flush only this layer's history while changing its crop; otherwise the
  // near-static afterimage would obscure the newly revealed image edges.
  backdropTrail.uniforms.damp.value = backdropMoving ? 0 : 0.9999;
  backdropChanged = false;
  scrollVelocity *= Math.exp(-1.2 * wallDelta);
  scrollEnergy *= Math.exp(-1.1 * wallDelta);
  const localRate = (0.035 + scrollEnergy * 0.965) * (motionReduced ? 0.2 : 1);
  const delta = wallDelta * localRate;
  visualTime += delta;
  const breakup = (motionReduced ? 0.16 : 1) * (0.12 + scrollEnergy * 0.88);
  for (const pass of [signalBreak, upperBreak]) {
    pass.uniforms.clock.value = visualTime;
    pass.uniforms.strength.value = breakup;
    pass.uniforms.direction.value = scrollDirection;
  }
  const travelLimit = extent / 2 + 2;
  target.z = Math.max(-travelLimit, Math.min(travelLimit, target.z + scrollVelocity * wallDelta));
  horizontal.position.set(position.x, 0.05, position.z);
  vertical.position.set(position.x, 0.05, position.z);
  position.lerp(target, 1 - Math.pow(1 - 0.06, delta * 60));
  for (const layer of [foreground, background, upper]) layer.composer.render(delta);
  if (pendingFour && requestedBackdrop === 2 && revealProgress === 1) showFour();
  smallB.rotation.z += 0.02 * localRate;
  smallC.rotation.y += 0.02 * localRate;
  smallA.rotation.z += 0.02 * localRate;
  for (const mesh of [smallB, smallC, smallA]) mesh.scale.z += 0.02 * localRate;
  largeA.rotation.z += 0.02 * localRate;
  largeA.rotation.x += 0.02 * localRate;
  for (const mesh of [largeB, largeC]) {
    mesh.rotation.x += 0.002 * localRate;
    mesh.rotation.z += 0.002 * localRate;
  }
}
animate();

window.addEventListener('resize', () => {
  aspect = innerWidth / innerHeight;
  fitBackdrop();
  for (const {camera, renderer, composer} of [foreground, background, upper]) {
    camera.left = -extent * aspect / 2;
    camera.right = extent * aspect / 2;
    camera.top = extent / 2;
    camera.bottom = -extent / 2;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
    composer.setSize(innerWidth, innerHeight);
  }
});
