// Flock class consisting of multiple boids
class Flock {
    constructor(){
    this.boids = [];
    }
  
  // Method of the Flock class to add a new boid to the flock
  addBoid(boid){
    this.boids.push(boid)
  }
  
  // This function moves the boids in the canvas
  moveBoids(){
      for (var i = 0; i < this.boids.length; i++) {
        this.boids[i].update();
        this.boids[i].borders();
        this.boids[i].render();
      }
  }
}