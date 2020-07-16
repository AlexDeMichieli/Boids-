class Predator extends Boid{

    constructor() {
        super()

        this.mass = 1.0;
        this.position = createVector(windowWidth/2, windowHeight/2 )
        this.velocity = p5.Vector.random2D()
        this.velocity.setMag(random(2, 4))
        this.r = 3.5;
        this.maxSpeed = 2.0;
        this.maxForce = 0.05;
    }

    velocitySeparation(){
        var limitingDistance = 20 * this.r;
        var limitingPosition = createVector(0,0);
        var nearbyPredators = 0;
        for (b of predatorFlock.boids) {
          var distance = this.position.dist(b.position);
          if (distance != 0 && distance < limitingDistance ){
              var diff = p5.Vector.sub(this.position,b.position);
              limitingPosition.add(diff.normalize().div(distance));
              nearbyPredators++;
            }
          }
      
        if(nearbyPredators){
          limitingPosition.div(nearbyPredators);
        }
      
        if(limitingPosition.mag()){
          limitingPosition.normalize().mult(this.maxSpeed).sub(this.velocity).limit(this.maxForce);
        }
        return limitingPosition
      }

    lockPredator(boids) {

        let neighbordist = this.r;
        let averageBoid = createVector(0,0);
        let nearbyBoids = 0;
      
        for (let other of boids) {
          let distance = p5.Vector.dist(this.position, other.position);
          if (distance < neighbordist) {
            averageBoid.add(other.position);
            nearbyBoids++;
          }
        }
      
        if (nearbyBoids) {
          averageBoid.div(nearbyBoids);
          let desired = p5.Vector.sub(averageBoid, this.position);
          return desired.limit(this.maxForce);
        }
        return createVector(0,0);
      }

    //   update(){

    //     let lockingVelocity = this.lockPredator();
    //     let separationVelocity = this.velocitySeparation();

    //     // Coefficient to scale the separation velocity
    //     let separationCoefficient = 20;

    //     this.velocity.add(separationVelocity.mult(separationCoefficient));
    //     this.velocity.add(lockingVelocity).limit(this.maxSpeed);
    //     this.position = this.position.add(this.velocity);
    // }

    display() {
        let c = color('red');
        fill(c)
        push();
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        triangle(8, 0, -8, 6, -8, -6);
        pop();
      }
  
}