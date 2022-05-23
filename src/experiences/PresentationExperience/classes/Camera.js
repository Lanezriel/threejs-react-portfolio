import * as THREE from "three";

import Experience from "./Experience";

const normalize = (val, min, max) => (val - min) / (max - min);

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.time = this.experience.time;
    this.scroll = this.experience.scroll;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.cameraPath = this.experience.cameraPath;

    // Setup
    this.rotationMatrix = new THREE.Matrix4();
    this.targetQuaternion = new THREE.Quaternion();
    this.rotationSpeed = 0.001;
    this.target = this.cameraPath.geometry.parameters.path.getPointAt(0.005);

    this.setInstance();
    this.setTransitions();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(35, this.sizes.width / this.sizes.height, 0.1, 100);
    // this.instance.position.set(0, 0, 10);
    this.instance.position.copy(this.cameraPath.geometry.parameters.path.getPointAt(0));
    this.instance.lookAt(this.cameraPath.geometry.parameters.path.getPointAt(0.01));
    this.scene.add(this.instance);
  }

  setTransitions() {
    this.transitions = [
      {
        start: 0.02,
        end: 0.09,
        target: new THREE.Vector3(-3.3, 0.2, 3.7),
        speed: 0.001,
        lightName: 'belgiumLight',
      },
    ];
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    if (
      (this.scroll.scrollDirection > 0 && this.scroll.currentProgress >= this.scroll.targetProgress)
      || (this.scroll.scrollDirection < 0 && this.scroll.currentProgress <= this.scroll.targetProgress)
    ) {
      this.scroll.scrolling = false;
      this.scroll.previousTargetProgress = this.scroll.targetProgress;
    } else {
      const acceleration = Math.sin(3 * normalize(
        this.scroll.currentProgress, this.scroll.previousTargetProgress, this.scroll.targetProgress
      ));
      const speed = 0.0005 * Math.max(Math.min(acceleration * 1.5, 0.75), 0.25);

      if (this.scroll.scrollDirection > 0) {
        this.scroll.currentProgress += speed;
      } else if (this.scroll.scrollDirection < 0) {
        this.scroll.currentProgress -= speed;
      }

      this.scroll.scrollY = (document.body.scrollHeight - this.sizes.height) * this.scroll.currentProgress;
      window.scrollTo(0, this.scroll.scrollY);

      const progress = Math.min(Math.max(this.scroll.currentProgress, 0), 1);

      this.instance.position.copy(this.cameraPath.geometry.parameters.path.getPointAt(progress));

      const currentTransition = this.transitions.find(
        (t) => t.start <= this.scroll.currentProgress && t.end >= this.scroll.currentProgress
      );
      
      if (currentTransition !== undefined) {
        this.target = currentTransition.target;
        this.rotationSpeed = currentTransition.speed;
      }
      if (progress <= 0.95 && currentTransition === undefined) {
        // this.instance.lookAt(this.cameraPath.geometry.parameters.path.getPointAt(progress + 0.005));
        this.target = this.cameraPath.geometry.parameters.path.getPointAt(progress + 0.005);
        this.rotationSpeed = 0.002;
      }

      // Recalculate as the camera changed position
      this.rotationMatrix.lookAt(this.instance.position, this.target, this.instance.up);
      this.targetQuaternion.setFromRotationMatrix(this.rotationMatrix);
    }

    if (
      !this.instance.quaternion.equals(this.targetQuaternion)
      && this.scroll.currentProgress <= 0.95
    ) {
      const step = this.rotationSpeed * this.time.delta;
      this.instance.quaternion.rotateTowards(this.targetQuaternion, step);
    }
  }
}
