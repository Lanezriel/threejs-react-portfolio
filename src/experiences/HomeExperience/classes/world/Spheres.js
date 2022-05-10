import * as THREE from "three";
import Experience from "../Experience";

export default class Spheres {
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
    this.geometry = new THREE.SphereBufferGeometry(1, 16, 16);
  }

  setTexture() {
    this.textures = {};
  }

  setMaterial() {
    this.material = new THREE.MeshStandardMaterial();
  }

  setMesh() {
    this.count = 10;
    this.mesh = new THREE.InstancedMesh(this.geometry, this.material, this.count);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.scene.add(this.mesh);

    for (let i = 0; i < this.count; i++) {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5,
        (Math.random() * 0.5) - 1.5
      );

      const uniScale = Math.random() * 0.5;
      const scale = new THREE.Vector3(
        uniScale,
        uniScale,
        uniScale
      );

      const matrix = new THREE.Matrix4();
      matrix.setPosition(position);
      matrix.scale(scale);
      this.mesh.setMatrixAt(i, matrix);
    }
  }
}
