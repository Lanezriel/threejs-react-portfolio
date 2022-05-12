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

  setModel() {
    console.log(this.resource);
    this.cameraPath = this.resource.scene.children[0];
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
    this.geometry = new THREE.TubeBufferGeometry(this.curve, 200, 0.05, 10, false);
  }

  setMaterial() {
    this.material = new THREE.LineBasicMaterial({ color: 0xff0000 });
  }

  setCameraPath() {
    this.cameraPath = new THREE.Line(this.geometry, this.material);
    this.scene.add(this.cameraPath);
  }
}