import * as THREE from "three";
import Experience from "../Experience";

export default class Floor {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Setup
    this.resource = this.resources.items.floorModel;
    
    this.setModel();

    // this.setGeometry();
    // this.setMaterial();
    // this.setMesh();
  }

  setModel() {
    this.model = this.resource.scene;
    this.model.scale.set(0.1, 0.1, 0.1);
    this.scene.add(this.model);
  }

  setGeometry() {
    this.geometry = new THREE.PlaneBufferGeometry(10, 10, 1, 1);
  }

  setMaterial() {
    this.material = new THREE.MeshBasicMaterial();
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.x = - Math.PI * 0.5;
    this.scene.add(this.mesh);
  }
}