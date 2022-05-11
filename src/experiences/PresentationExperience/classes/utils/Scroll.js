import EventEmitter from "./EventEmitter";

export default class Scroll extends EventEmitter {
  constructor() {
    super();

    // Setup
    this.scrollY = 0;

    window.addEventListener('scroll', this.scrollHandler);
  }

  scrollHandler = () => {
    this.scrollY = window.scrollY;

    this.trigger('scroll');
  }

  destroy() {
    window.removeEventListener('scoll', this.scrollHandler);
  }
}