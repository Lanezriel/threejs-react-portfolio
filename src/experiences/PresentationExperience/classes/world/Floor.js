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
    this.setLights();

    // this.setGeometry();
    // this.setMaterial();
    // this.setMesh();
  }

  setModel() {
    this.model = this.resource.scene;
    this.model.traverse((child) => {
      if (child.isMesh) {
        child.receiveShadow = true;
        child.castShadow = true;
      }
    });
    this.model.scale.set(0.1, 0.1, 0.1);
    this.scene.add(this.model);
  }

  setLights() {
    const lights = [
      {
        name: 'belgiumLight',
        color: '#ffb380',
        intensity: 1.5,
        distance: 3,
        angle: Math.PI * 0.2,
        position: new THREE.Vector3(-2.9, 0.05, 4.3),
        targetPosition: new THREE.Vector3(-3.5, 0.1, 3.4),
      },
    ];

    lights.forEach((light) => {
      const target = new THREE.Object3D();
      target.position.copy(light.targetPosition);

      const spotLight = new THREE.SpotLight(
        light.color,
        light.intensity,
        light.distance,
        light.angle,
      );
      spotLight.name = light.name;
      spotLight.position.copy(light.position);
      spotLight.target = target;
      spotLight.castShadow = true;
      spotLight.shadow.camera.far = 25;
      spotLight.shadow.normalBias = 0.05;

      this.scene.add(spotLight);
      this.scene.add(spotLight.target);

      // const spotLightHelper = new THREE.SpotLightHelper(spotLight);
      // spotLightHelper.update();
      // this.scene.add(spotLightHelper);
    });
  }

  setGeometry() {
    this.geometry = new THREE.PlaneBufferGeometry(10, 10, 1, 1);
  }

  setMaterial() {
    this.material = new THREE.MeshStandardMaterial();
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.x = - Math.PI * 0.5;
    this.scene.add(this.mesh);
  }
}
