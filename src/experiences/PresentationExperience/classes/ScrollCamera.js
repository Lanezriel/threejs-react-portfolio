import * as THREE from "three";

import Experience from "./Experience";

export default class ScrollCamera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scroll = this.experience.scroll;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.cameraPath = this.experience.cameraPath;

    // Setup
    this.sections = document.getElementsByTagName('section');

    this.setInstance();
    this.setHelper();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 10);
    this.instance.position.copy(this.cameraPath.geometry.parameters.path.getPointAt(0));
    this.instance.lookAt(this.cameraPath.geometry.parameters.path.getPointAt(0.1));
    this.scene.add(this.instance);
  }

  setHelper() {
    this.helper = new THREE.CameraHelper(this.instance);
    this.scene.add(this.helper);
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    const progress = this.scroll.scrollY / ((this.sections.length - 1) * this.sizes.height);
    
    this.instance.position.copy(this.cameraPath.geometry.parameters.path.getPointAt(progress));
    this.instance.lookAt(this.cameraPath.geometry.parameters.path.getPointAt(progress + 0.01));
  }
}
