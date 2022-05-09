import * as THREE from "three";
import Experience from "../Experience";

export default class CursorLight {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.cursor = this.experience.cursor;
    this.scene = this.experience.scene;
    this.time = this.experience.time;
    this.debug = this.experience.debug;

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('cursorLight');
    }

    // Setup
    this.setSphereGeometry();
    this.setSphereMaterial();
    this.setLight();
    this.setSphere();
  }

  setSphereGeometry() {
    this.sphereGeometry = new THREE.SphereBufferGeometry(0.02, 10, 10);
  }

  setSphereMaterial() {
    this.sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  }

  setLight() {
    this.light = new THREE.PointLight(0x3000ff, 1, 2, 2);

    if (this.debug.active) {
      this.debugFolder.addColor(this.light, 'color');
      this.debugFolder.add(this.light, 'intensity').min(0).max(1000).step(0.01);
      this.debugFolder.add(this.light, 'distance').min(0).max(1000).step(0.01);
      this.debugFolder.add(this.light, 'decay').min(0).max(100).step(0.1);
    }
  }

  setSphere() {
    this.sphere = new THREE.Mesh(this.sphereGeometry, this.sphereMaterial);
    this.sphere.add(this.light);
    this.sphere.position.set(2, 2, 2);
    this.scene.add(this.sphere);
  }

  update() {
    this.sphere.position.copy(this.cursor.position);
  }
}