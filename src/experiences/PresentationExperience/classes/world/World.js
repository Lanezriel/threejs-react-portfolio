import Experience from "../Experience";
import Floor from "./Floor";
import Cubes from "./Cubes";

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
    this.floor = new Floor();
    this.cubes = new Cubes();
  }

  update() {

  }
}
