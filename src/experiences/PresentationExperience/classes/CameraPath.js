import * as THREE from "three";
import Experience from "./Experience";

export default class CameraPath {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Setup
    this.setCurve();
    this.setGeometry();
    this.setMaterial();
    this.setCameraPath();
  }

  setCurve() {
    this.curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3, 1, 4),
      new THREE.Vector3(-2.5, 0.1, 3),
      new THREE.Vector3(0, 0.25, 3.5),
      new THREE.Vector3(1, 0.1, 3),
      new THREE.Vector3(2.5, 0.25, 3),
      new THREE.Vector3(3, 0.1, 1.5),
      new THREE.Vector3(4, 0.5, 0.5),
      new THREE.Vector3(3, 0.1, -1),
      new THREE.Vector3(3.5, 0.25, -3),
      new THREE.Vector3(1, 0.1, -3),
      new THREE.Vector3(0, 0.5, -3.5),
      new THREE.Vector3(-1, 0.1, -2),
      new THREE.Vector3(-2, 0.25, -1),
      new THREE.Vector3(0, 0.1, 0),
    ], false);
  }

  setGeometry() {
    this.geometry = new THREE.TubeBufferGeometry(this.curve, 200, 0, 1, false);
  }

  setMaterial() {
    this.material = new THREE.LineBasicMaterial({ color: 0xff0000 });
  }

  setCameraPath() {
    this.cameraPath = new THREE.Line(this.geometry, this.material);
    this.scene.add(this.cameraPath);
  }
}