import * as THREE from "three";
import Experience from "../Experience";

export default class DirectionalLight {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    
    // Setup
    this.setLight();
  }

  setLight() {
    this.light = new THREE.DirectionalLight('#ffffff', 10);
    this.scene.add(this.light);

    this.lightHelper = new THREE.DirectionalLightHelper(this.light);
    this.scene.add(this.lightHelper);
  }
}