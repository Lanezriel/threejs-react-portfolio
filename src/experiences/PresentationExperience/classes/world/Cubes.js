import * as THREE from "three";
import Experience from "../Experience";

export default class Cubes {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    this.setGeometry();
    this.setMaterial();
    this.setMesh();
  }

  setGeometry() {
    this.geometry = new THREE.BoxBufferGeometry(1, 1, 1);
  }

  setMaterial() {
    this.material = new THREE.MeshStandardMaterial({ color: 0xaaaaaa });
  }

  setMesh() {
    this.count = 50;
    this.mesh = new THREE.InstancedMesh(this.geometry, this.material, this.count);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;
    this.scene.add(this.mesh);

    for (let i = 0; i < this.count; i++) {
      const position = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        Math.random() * 0.5,
        (Math.random() - 0.5) * 10
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
