import * as THREE from "three";

import Experience from "../Experience";

export default class LightTrackers {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.cursor = this.experience.cursor;
    this.scene = this.experience.scene;
    this.time = this.experience.time;

    this.numTrackers = 25;
    this.instances = [];
    this.tempObject = new THREE.Object3D();
    this.tempVector = new THREE.Vector3();
    
    for (let i = 0; i < this.numTrackers; i++) {
      this.instances.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1
        ),
        scale: 0.02,
        scaleZ: 0.08,
        velocity: new THREE.Vector3(
          0.1 + (Math.random() - 0.5) * 0.01,
          0.1 + (Math.random() - 0.5) * 0.01,
          0.1 + (Math.random() - 0.5) * 0.01
        ),
        attraction: 0.003 + (Math.random() - 0.5) * 0.001,
        vLimit: 0.025 + (Math.random() - 0.5) * 0.01,
      });
    }

    // Setup
    this.setLightTrackersGeometry();
    this.setLightTrackersMaterial();
    this.setLightTrackers();
  }

  setLightTrackersGeometry() {
    this.lightTrackersGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
  }

  setLightTrackersMaterial() {
    this.lightTrackersMaterial = new THREE.MeshStandardMaterial({
      metalness: 0.8,
      roughness: 0.5,
    });
  }

  setLightTrackers() {
    this.lightTrackersMesh = new THREE.InstancedMesh(
      this.lightTrackersGeometry,
      this.lightTrackersMaterial,
      this.numTrackers,
    );
    // this.lightTrackersMesh.castShadow = true;
    this.lightTrackersMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.scene.add(this.lightTrackersMesh);

    for(let i = 0; i < this.numTrackers; i++) {
      const { position, scale, scaleZ } = this.instances[i];

      this.tempObject.position.copy(position);
      this.tempObject.scale.set(scale, scale, scaleZ);
      this.tempObject.updateMatrix();

      this.lightTrackersMesh.setMatrixAt(i, this.tempObject.matrix);
    }
  }

  update() {
    for (let i = 0; i < this.numTrackers; i++) {
      const {
        position,
        scale,
        scaleZ,
        velocity,
        attraction,
        vLimit,
      } = this.instances[i];

      this.tempVector.copy(this.cursor.position).sub(position).normalize().multiplyScalar(attraction * (this.time.delta / 20));
      velocity.add(this.tempVector).clampScalar(-vLimit, vLimit);
      position.add(velocity);

      this.tempObject.position.copy(position);
      this.tempObject.scale.set(scale, scale, scaleZ);
      this.tempObject.lookAt(this.tempVector.copy(position).add(velocity));
      this.tempObject.updateMatrix();
      this.lightTrackersMesh.setMatrixAt(i, this.tempObject.matrix);
    }

    this.lightTrackersMesh.instanceMatrix.needsUpdate = true;
  }
}
