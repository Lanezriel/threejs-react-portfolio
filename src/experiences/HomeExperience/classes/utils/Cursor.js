import * as THREE from "three";

import Experience from "../Experience";
import EventEmitter from "./EventEmitter";

export default class Cursor extends EventEmitter {
  constructor() {
    super();

    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.camera = this.experience.camera;

    // Setup
    this.vector = new THREE.Vector3();
    this.position = new THREE.Vector3();

    // Mouse Move Event
    window.addEventListener('mousemove', this.eventHandler);
    window.addEventListener('touchmove', this.eventHandler);
  }

  eventHandler = (event) => {
    const clientX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
    const clientY = event.type === 'touchmove' ? event.touches[0].clientY : event.clientY;
    this.vector.set(
      (clientX / this.sizes.width) * 2 - 1,
      - ((clientY / this.sizes.height) * 2 - 1),
      1
    );

    this.vector.unproject(this.camera.instance);
    this.vector.sub(this.camera.instance.position).normalize();

    let distance = - this.camera.instance.position.z / this.vector.z;

    this.position.copy(this.camera.instance.position).add(this.vector.multiplyScalar(distance));

    this.trigger('mousemove');
  };

  destroy() {
    window.removeEventListener('mousemove', this.eventHandler);
    window.removeEventListener('touchmove', this.eventHandler);
  }
}