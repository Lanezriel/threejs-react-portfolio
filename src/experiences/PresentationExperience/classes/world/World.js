import Experience from "../Experience";
import Environment from "./Environment";
import Floor from "./Floor";
// import Cubes from "./Cubes";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Wait for resources
    this.resources.on('ready', () => {
      // Setup
      this.floor = new Floor();
      this.environment = new Environment();
    });
  }

  update() {

  }
}
