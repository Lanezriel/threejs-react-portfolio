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
    this.setPointsOfInterest();
    this.setGeometry();
    this.setMaterial();
    this.setCameraPath();
  }

  setCurve() {
    this.curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3.2, 0.4, 6.5),
      new THREE.Vector3(-3.5, 0.4, 6.2),
      new THREE.Vector3(-2.5, 0.1, 4.5),
      new THREE.Vector3(0, 0.2, 4.8),
      new THREE.Vector3(2, 0.18, 4.5),
      new THREE.Vector3(3.5, 0.1, 4.7),
      new THREE.Vector3(3.9, 0.2, 2.8),
      new THREE.Vector3(5.2, 0.1, 1.8),
      new THREE.Vector3(4.6, 0.25, 0.3),
      new THREE.Vector3(3.9, 0.1, -1.3),
      new THREE.Vector3(3.4, 0.1, -2),
      new THREE.Vector3(4.5, 0.5, -3.5),
      new THREE.Vector3(3.3, 0.25, -5.5),
      new THREE.Vector3(2, 0.2, -5.8),
      new THREE.Vector3(1.2, 0.1, -5.3),
      new THREE.Vector3(0, 0.2, -3.5),
      new THREE.Vector3(-2.8, 0.1, -4),
      new THREE.Vector3(-3, 0.2, -3),
      new THREE.Vector3(-3.4, 0.1, -0.3),
      new THREE.Vector3(-1.6, 0.3, 0),
      new THREE.Vector3(-0.3, 0.1, 0.3),
    ], false);
  }

  setPointsOfInterest() {
    this.pointsOfInterest = [
      0,
      0.07,
      0.24,
      0.35,
      0.45,
      0.65,
      0.8,
      0.9,
      1
    ];
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