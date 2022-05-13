import * as THREE from "three";

import Debug from "./utils/Debug";
import Sizes from "./utils/Sizes";
import Time from "./utils/Time";
import Resources from "./utils/Resources";

import Camera from "./Camera";
import CameraPath from "./CameraPath";
// import ScrollCamera from "./ScrollCamera";
import Renderer from "./Renderer";

import sources from "./sources";
import World from "./world/World";
import Scroll from "./utils/Scroll";

let instance = null;

export default class Experience {
  constructor(canvas) {
    // Singleton
    if (instance) {
      return instance;
    }
    instance = this;

    // Global access
    window.experience = this;

    // Options
    this.canvas = canvas;

    // Setup
    this.debug = new Debug();
    this.sizes = new Sizes();
    this.scroll = new Scroll();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.resources = new Resources(sources);
    this.cameraPath = new CameraPath();
    // this.scrollCamera = new ScrollCamera();
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.world = new World();

    // Size resize event
    this.sizes.on('resize', () => {
      this.resize();
    });

    // Scroll event
    this.scroll.on('scroll', () => {
      this.scrollEvent();
    });

    // Time tick event
    this.time.on('tick', () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  scrollEvent() {
    // this.scrollCamera.update();
    // this.camera.update();
  }

  update() {
    this.world.update();
    this.camera.update();
    this.renderer.update();
  }

  destroy() {
    this.sizes.off('resize');
    this.scroll.off('scroll');
    this.time.off('tick');

    // Traverse the whole scene
    this.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose()

        // Loop through the material properties
        Object.keys(child.material).forEach((key) => {
          const value = child.material[key]

          // Test if there is a dispose function
          if (value && typeof value.dispose === 'function') {
            value.dispose()
          }
        });
      }
    })

    // this.camera.controls.dispose()
    this.renderer.instance.dispose()

    if (this.debug.active) {
      this.debug.ui.destroy()
    }

    instance = null;
  }
};
