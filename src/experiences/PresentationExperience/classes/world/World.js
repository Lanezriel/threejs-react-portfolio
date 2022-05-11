import Experience from "../Experience";

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
    
  }

  update() {

  }
}
