import * as THREE from "three";
import Experience from "../Experience";

export default class Cubes {
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

      const uniScale = Math.random();
      const scale = new THREE.Vector3(
        uniScale,
        uniScale,
        uniScale
      );

      const quaternion = new THREE.Quaternion();
      quaternion.setFromEuler(
        new THREE.Euler(
          (Math.random() - 0.5) * Math.PI * 2,
          (Math.random() - 0.5) * Math.PI * 2,
          0
        )
      );

      const matrix = new THREE.Matrix4();
      matrix.makeRotationFromQuaternion(quaternion);
      matrix.setPosition(position);
      matrix.scale(scale);
      this.mesh.setMatrixAt(i, matrix);
    }
  }
}
