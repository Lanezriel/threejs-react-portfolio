import * as THREE from "three";
import Experience from "../Experience";

export default class Cube {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    this.setGeometry();
    this.setTexture();
    this.setMaterial();
    this.setMesh();
  }

  setGeometry() {
    this.geometry = new THREE.BoxBufferGeometry(1, 1, 1);
  }

  setTexture() {
    this.textures = {};
  }

  setMaterial() {
    this.material = new THREE.MeshStandardMaterial();
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.position.set(-1.5, 1, -1);
    this.mesh.rotation.set(0, Math.PI * 0.25, Math.PI * 0.25)
    this.scene.add(this.mesh);
  }
}
