import * as THREE from "three";

import Experience from "../Experience";
import cursorLightVertexShader from "../shaders/cursorLight/vertex.js";
import cursorLightFragmentShader from "../shaders/cursorLight/fragment.js";

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
    this.setPlaneGeometry();
    this.setPlaneMaterial();
    this.setLight();
    this.setPlane();
  }

  setPlaneGeometry() {
    this.planeGeometry = new THREE.PlaneBufferGeometry(1, 1, 1, 1);
  }

  setPlaneMaterial() {
    this.planeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        uColor: { value: new THREE.Color(0x3000ff) },
      },
      blending: THREE.AdditiveBlending,
      transparent: true,
      vertexShader: cursorLightVertexShader,
      fragmentShader: cursorLightFragmentShader,
    });
  }

  setLight() {
    this.light = new THREE.PointLight(0x3000ff, 3, 4, 2);
    this.light.castShadow = true;

    if (this.debug.active) {
      this.debugFolder.addColor(this.light, 'color');
      this.debugFolder.add(this.light, 'intensity').min(0).max(1000).step(0.01);
      this.debugFolder.add(this.light, 'distance').min(0).max(1000).step(0.01);
      this.debugFolder.add(this.light, 'decay').min(0).max(100).step(0.1);
    }
  }

  setPlane() {
    this.plane = new THREE.Mesh(this.planeGeometry, this.planeMaterial);
    this.plane.add(this.light);
    this.plane.scale.set(0.75, 0.75, 0.75);
    this.scene.add(this.plane);
  }

  update() {
    this.plane.position.copy(this.cursor.position);
  }
}