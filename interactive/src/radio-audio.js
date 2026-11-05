// Count a qualifying scroll gesture once, queue transmissions, and keep ambience on.
const SCROLL_PIXELS_PER_COUNT = 80;
const SCROLL_GESTURE_PAUSE_MS = 140;
// Measured spoken interval in seq7; its file includes leading/trailing silence.
const FINAL_SPEECH_CUE = {start: 2.1, end: 3.7};
const captionResponse = await fetch(new URL('../../generat_sounds/sounds.txt', import.meta.url), {cache: 'no-store'});
if (!captionResponse.ok) throw new Error('Could not load sounds.txt');
const SEQUENCE_CAPTIONS = (await captionResponse.text()).split(/\r?\n/).map(line => line.trim()).filter(Boolean);
if (SEQUENCE_CAPTIONS.length !== 7) throw new Error('Expected seven subtitle lines in sounds.txt');
export class RadioTransmission {
  constructor(onSequenceStart, captionElement = null, onScrollCount = () => {}, onSequenceEnd = () => {}, onFinalSpeechEnd = () => {}) {
    this.onSequenceStart = onSequenceStart;
    this.onScrollCount = onScrollCount;
    this.onSequenceEnd = onSequenceEnd;
    this.onFinalSpeechEnd = onFinalSpeechEnd;
    this.finalSpeechEnded = false;
    this.captionPlaying = false;
    this.stopped = false;
    this.captionElement = captionElement;
    this.thresholds = [5, 10, 13, 19, 22, 24, 34];
    this.scrolls = 0;
    this.totalScrolls = 0;
    this.easyImageScroll = false;
    this.sequence5Released = false;
    this.sequence7Released = false;
    this.sequence5Finished = false;
    this.next = 0;
    this.pending = [];
    this.current = null;
    this.started = false;
    this.enabled = false;
    this.firstSequenceAt = null;
    this.firstSequenceTimer = null;
    this.unlocking = null;
    this.scrollDistance = 0;
    this.gestureCounted = false;
    this.lastScrollAt = -Infinity;
    this.ambience = new Audio(new URL('../sounds/radio_bg.wav', import.meta.url).href);
    this.ambience.loop = true;
    this.ambience.preload = 'auto';
    this.ambience.volume = 0.18;
    this.clips = this.thresholds.map((_, index) => {
      const clip = new Audio(new URL(`../sounds/seq${index + 1}.mp3`, import.meta.url).href);
      clip.preload = 'auto';
      clip.addEventListener('playing', () => {
        if (this.current !== index) return;
        this.captionPlaying = true;
        this.syncCaption();
        if (this.started) return;
        this.started = true;
        this.onSequenceStart(index + 1);
      });
      clip.addEventListener('timeupdate', () => this.syncCaption());
      clip.addEventListener('ended', () => this.finish(index));
      for (const type of ['pause', 'waiting']) {
        clip.addEventListener(type, () => {
          if (this.current === index) {this.captionPlaying = false;this.setCaption(null);}
        });
      }
      clip.addEventListener('error', () => {
        if (this.current === index) {this.captionPlaying = false;this.setCaption(null);}
        console.error(`Could not load seq${index + 1}. Check the local sounds folder.`);
      });
      return clip;
    });
  }

  setCaption(index) {
    if (this.captionElement) this.captionElement.textContent = index === null ? '' : (SEQUENCE_CAPTIONS[index] || '');
  }

  syncCaption() {
    if (this.stopped || this.current === null || !this.captionPlaying) {
      this.setCaption(null);return;
    }
    const time = this.clips[this.current].currentTime;
    if (this.current === 6) {
      this.setCaption(time >= FINAL_SPEECH_CUE.start && time < FINAL_SPEECH_CUE.end ? 6 : null);
      if (time >= FINAL_SPEECH_CUE.end) this.finishFinalSpeech();
    } else this.setCaption(this.current);
  }

  finishFinalSpeech() {
    if (this.finalSpeechEnded) return;
    this.finalSpeechEnded = true;
    this.onFinalSpeechEnd();
  }

  stop() {
    this.stopped = true;
    this.enabled = false;
    this.pending.length = 0;
    if (this.firstSequenceTimer !== null) clearTimeout(this.firstSequenceTimer);
    this.firstSequenceTimer = null;
    this.captionPlaying = false;
    this.current = null;
    for (const clip of this.clips) clip.pause();
    this.ambience.pause();
    this.ambience.currentTime = 0;
    this.setCaption(null);
  }

  unlock() {
    if (this.stopped) return Promise.resolve();
    if (this.enabled) return Promise.resolve();
    if (this.unlocking) return this.unlocking;
    // Wheel events alone may not unlock browser audio. A click/tap or key press
    // retries playback; queued scroll-triggered clips are retained until then.
    this.unlocking = this.ambience.play().then(() => {
      if (this.stopped) {this.ambience.pause();return;}
      this.enabled = true;
      if (this.firstSequenceAt === null) this.firstSequenceAt = performance.now() + 6000;
      this.drain();
    }).catch(() => {
      // Retry on the next click, tap, or key press if autoplay was blocked.
    }).finally(() => {this.unlocking = null;});
    return this.unlocking;
  }

  beginGesture() {
    this.scrollDistance = 0;
    this.gestureCounted = false;
    this.lastScrollAt = -Infinity;
  }

  wheel(delta, now = performance.now(), gestureByPause = true) {
    if (!Number.isFinite(delta) || Math.abs(delta) < 0.5) return;
    const threshold = this.easyImageScroll ? 40 : SCROLL_PIXELS_PER_COUNT;
    const pause = this.easyImageScroll ? 90 : SCROLL_GESTURE_PAUSE_MS;
    if (gestureByPause && now - this.lastScrollAt >= pause) this.beginGesture();
    this.lastScrollAt = now;
    if (this.gestureCounted) return;
    this.scrollDistance += Math.abs(delta);
    if (this.scrollDistance >= threshold) {
      this.gestureCounted = true;
      this.countScroll();
    }
  }

  countScroll() {
    if (this.stopped) return;
    this.totalScrolls++;
    // Visual gestures continue, but audio counts stop before seq5 until 4.png
    // is displayed, then hold through seq5. Held gestures are not banked.
    if ((!this.sequence5Released && this.scrolls < 21) || this.sequence5Finished) this.scrolls++;
    this.onScrollCount(this.totalScrolls);
    if (this.next < this.thresholds.length && this.scrolls >= this.thresholds[this.next]) {
      this.pending.push(this.next++);
      this.drain();
    }
  }

  releaseSequence5() {
    if (this.sequence5Released) return;
    this.sequence5Released = true;
    this.scrolls = 22;
    while (this.next < 5) this.pending.push(this.next++);
    this.drain();
  }

  releaseSequence7() {
    if (this.sequence7Released) return;
    this.sequence7Released = true;
    while (this.next < 7) this.pending.push(this.next++);
    this.drain();
  }

  drain() {
    if (this.stopped || !this.enabled || this.current !== null || !this.pending.length) return;
    if (this.pending[0] === 6 && !this.sequence7Released) return;
    if (this.pending[0] === 0) {
      const remaining = this.firstSequenceAt - performance.now();
      if (remaining > 0) {
        if (this.firstSequenceTimer === null) this.firstSequenceTimer = setTimeout(() => {
          this.firstSequenceTimer = null;
          this.drain();
        }, remaining);
        return;
      }
    }
    const index = this.pending.shift();
    const clip = this.clips[index];
    this.current = index;
    this.started = false;
    this.captionPlaying = false;
    this.setCaption(null);
    clip.currentTime = 0;
    this.ambience.volume = 0.09;
    clip.play().catch(() => {
      if (this.current !== index) return;
      this.current = null;
      this.setCaption(null);
      this.pending.unshift(index);
      this.enabled = false;
      this.ambience.volume = 0.18;
      // Keep the clip queued and retry on the next user interaction.
    });
  }

  finish(index) {
    if (this.current !== index) return;
    this.setCaption(null);
    this.current = null;
    this.captionPlaying = false;
    if (index === 6) this.finishFinalSpeech();
    if (index === 4) this.sequence5Finished = true;
    this.onSequenceEnd(index + 1);
    this.ambience.volume = 0.18;
    this.drain();
  }
}
