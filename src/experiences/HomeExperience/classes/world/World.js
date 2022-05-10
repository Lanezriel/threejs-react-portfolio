import Experience from "../Experience";
import CursorLight from "./CursorLight";
import Cubes from "./Cubes";
import Spheres from "./Spheres";
import LightTrackers from "./LightTrackers";

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
    this.lightTrackers = new LightTrackers();
    this.cubes = new Cubes();
    this.spheres = new Spheres();
  }

  update() {
    this.cursorLight.update();
    this.lightTrackers.update();
  }
}
