import * as THREE from "three";
import Experience from "./Experience";

export default class CameraPath {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;

    // Setup
    this.setCurve();
    this.setGeometry();
    this.setMaterial();
    this.setCameraPath();
  }

  setCurve() {
    this.curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3, -1, 3),
      new THREE.Vector3(-1.75, -1.5, 1),
      new THREE.Vector3(-0.5, -0.75, 2.5),
      new THREE.Vector3(-0, -2, 0.75),
      new THREE.Vector3(0.5, -0.5, 0),
      new THREE.Vector3(0.75, 0.25, 0.25),
      new THREE.Vector3(1.25, -0.5, 0.5),
      new THREE.Vector3(2.5, 1, -1),
      new THREE.Vector3(3, 0.5, -1),
      new THREE.Vector3(5, 1, -3),
    ], false);
  }

  setGeometry() {
    this.geometry = new THREE.TubeBufferGeometry(this.curve, 100, 0.1, 5, false);
  }

  setMaterial() {
    this.material = new THREE.LineBasicMaterial({ color: 0xff0000 });
  }

  setCameraPath() {
    this.cameraPath = new THREE.Line(this.geometry, this.material);
    this.scene.add(this.cameraPath);
  }
}