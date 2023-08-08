import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter {
  constructor() {
    super();

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
    const currentTime = Date.now();
    this.delta = currentTime - this.current;
    this.current = currentTime;
    this.elapsed = this.current - this.start;

    // Why does it have to be devided by 100 and not 60 to obtain 60 FPS ???!!!
    if (this.delta >= 1000/100) {
      this.trigger('tick');
    }

    window.requestAnimationFrame(() => {
      this.tick();
    });
  }
}