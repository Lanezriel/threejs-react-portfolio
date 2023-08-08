import * as THREE from "three";

import Debug from "./utils/Debug";
import Sizes from "./utils/Sizes";
import Cursor from "./utils/Cursor";
import Time from "./utils/Time";
import Resources from "./utils/Resources";

import Camera from "./Camera";
import Renderer from "./Renderer";

import sources from "./sources";
import World from "./world/World";

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
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.resources = new Resources(sources);
    this.camera = new Camera();
    this.renderer = new Renderer();
    this.cursor = new Cursor();
    this.world = new World();

    // Size resize event
    this.sizes.on('resize', () => {
      this.resize();
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

  update() {
    if (this.debug.active) this.debug.stats.begin()
    this.camera.update();
    this.world.update();
    this.renderer.update();
    if (this.debug.active) this.debug.stats.end()
  }

  destroy() {
    this.sizes.off('resize');
    this.time.off('tick');
    this.cursor.off('mousemove');
    this.cursor.destroy();

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
