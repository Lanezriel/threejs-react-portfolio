import * as THREE from "three";

import Experience from "./Experience";

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
    const progress = this.scroll.scrollY / (document.body.scrollHeight - this.sizes.height);

    this.instance.position.copy(this.cameraPath.geometry.parameters.path.getPointAt(progress));
    if (progress <= 0.95) {
      this.instance.lookAt(this.cameraPath.geometry.parameters.path.getPointAt(progress + 0.005));
    }
  }
}
