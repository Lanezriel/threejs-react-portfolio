import * as THREE from "three";

import Experience from "./Experience";

const normalize = (val, min, max) => (val - min) / (max - min);

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scroll = this.experience.scroll;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.cameraPath = this.experience.cameraPath;

    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100);
    // this.instance.position.set(0, 0, 10);
    this.instance.position.copy(this.cameraPath.geometry.parameters.path.getPointAt(0));
    this.instance.lookAt(this.cameraPath.geometry.parameters.path.getPointAt(0.01));
    this.scene.add(this.instance);
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    if (
      (this.scroll.scrollDirection > 0 && this.scroll.currentProgress >= this.scroll.targetProgress)
      || (this.scroll.scrollDirection < 0 && this.scroll.currentProgress <= this.scroll.targetProgress)
    ) {
      this.scroll.scrolling = false;
      this.scroll.previousTargetProgress = this.scroll.targetProgress;
    } else {
      const acceleration = Math.sin(3 * normalize(
        this.scroll.currentProgress, this.scroll.previousTargetProgress, this.scroll.targetProgress
      ));
      const speed = 0.001 * Math.max(Math.min(acceleration, 0.8), 0.25);

      if (this.scroll.scrollDirection > 0) {
        this.scroll.currentProgress += speed;
      } else if (this.scroll.scrollDirection < 0) {
        this.scroll.currentProgress -= speed;
      }

      this.scroll.scrollY = (document.body.scrollHeight - this.sizes.height) * this.scroll.currentProgress;
      window.scrollTo(0, this.scroll.scrollY);

      const progress = Math.min(Math.max(this.scroll.currentProgress, 0), 1);

      this.instance.position.copy(this.cameraPath.geometry.parameters.path.getPointAt(progress));
      if (progress <= 0.95) {
        this.instance.lookAt(this.cameraPath.geometry.parameters.path.getPointAt(progress + 0.005));
      }
    }
  }
}
