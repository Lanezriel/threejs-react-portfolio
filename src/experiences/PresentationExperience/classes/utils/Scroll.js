import EventEmitter from "./EventEmitter";

export default class Scroll extends EventEmitter {
  constructor() {
    super();

    // Setup
    this.scrolling = false;
    this.scrollY = 0;
    this.scrollDirection = 0;
    this.currentProgress = 0;
    this.previousTargetProgress = 0;
    this.targetProgress = 0;
    this.touchStartValue = 0;

    window.addEventListener('wheel', this.scrollHandler);

    window.addEventListener('touchstart', this.touchStart);
    window.addEventListener('touchmove', this.scrollHandler);
  }

  touchStart = (event) => {
    this.touchStartValue = event.touches[0].pageY;
  };

  scrollHandler = (event) => {
    window.scrollTo(0, this.scrollY);

    if (this.scrolling) {
      return;
    }

    this.scrolling = true;
    
    if(event.type === 'touchmove') {
      this.scrollDirection = this.touchStartValue - event.touches[0].pageY;
    } else {
      this.scrollDirection = event.deltaY;
    }

    if (this.scrollDirection > 0 && this.targetProgress < 1) {
      this.targetProgress += 0.1;
    } else if (this.scrollDirection < 0 && this.targetProgress > 0) {
      this.targetProgress -= 0.1;
    }
    this.targetProgress = Number(this.targetProgress.toFixed(1));

    this.trigger('scroll');
  }

  destroy() {
    window.removeEventListener('wheel', this.scrollHandler);
    
    window.removeEventListener('touchstart', this.scrollHandler);
    window.removeEventListener('touchmove', this.scrollHandler);
  }
}