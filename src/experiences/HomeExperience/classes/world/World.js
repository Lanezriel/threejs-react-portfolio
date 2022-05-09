import Experience from "../Experience";
import Cube from "./Cube";
import CursorLight from "./CursorLight";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // // Wait for resources
    // this.resources.on('ready', () => {
    //   // Setup
    //   this.cube = new Cube();
    // });

    // Setup
    this.cursorLight = new CursorLight();
    this.cube = new Cube();
  }

  update() {
    this.cursorLight.update();
  }
}
