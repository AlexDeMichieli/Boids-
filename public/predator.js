class Predator {

    constructor() {
 
    //Defines initial positon of the boid
    // this.position = createVector(windowWidth/2, windowHeight/2 )
    this.position = createVector(windowWidth/2, windowHeight/2 )
    this.velocity = p5.Vector.random2D()
    this.velocity.setMag(random(2, 4))
    this.acceleration = createVector()

    //steering force determines alignment and the ability to take other's direction
    }
  
    update() {
        this.position.add(this.velocity)
        this.velocity.add(this.acceleration)
    }
  
    display() {
        let c = color('red');
        fill(c)
        push();
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        triangle(8, 0, -8, 6, -8, -6);
        pop();
      }

      edges(){
        if(this.position.x > width) {
            this.position.x = 0
        }else if (this.position.x < 0){
            this.position.x = width
        }
        if(this.position.y > height) {
            this.position.y = 0
        }else if (this.position.y < 0){
            this.position.y = height
        }
    
    }
}