import Experience from "../Experience";
import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.debug = this.experience.debug;

    // Setup
    this.start = Date.now();
    this.current = this.start;
    this.elapsed = 0;
    this.delta = 16; // Avoiding possible bugs with 0

    // Wait for 1 'tick' to avoid havong a delta = 0
    window.requestAnimationFrame(() => {
      this.tick();
    });
  }

  tick() {
    if (this.debug.active) {
      this.debug.stats.begin();
    }

    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsed = this.current - this.start;

    this.trigger('tick');

    if (this.debug.active) {
      this.debug.stats.end();
    }

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}