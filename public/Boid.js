class Boid{
    constructor(){
    
    //Defines initial positon of the boid
    // this.position = createVector(windowWidth/2, windowHeight/2 )
    this.position = createVector(random(width), random(height) )
    this.velocity = p5.Vector.random2D()
    this.velocity.setMag(random(2, 4))
    this.acceleration = createVector()

    //steering force determines alignment and the ability to take other's direction
    //should be dat.gui
    this.maxForce = 1

    //should be dat.gui
    this.maxSpeed = 4
    }

//the Boid updates its positon bases on velocity and accelleration
update(){
    this.position.add(this.velocity)
    this.velocity.add(this.acceleration)
}

//1st of 3 important key rules. Alignment.
//Steer towards the average heading of local flockmates 
//the boid alignes to nearby flockmates. It has a limited range of visibility.
align(boids){
    let perception = 50
    let total = 0

    //the vector provides a number to velocity, which will be the average of all velocities,
    //which is added up and divided by the total
    let steering = createVector()
    for (let neighbours of boids){
        let distance = dist(this.position.x, 
                            this.position.y, 
                            neighbours.position.x, 
                            neighbours.position.y
                            )
        if(neighbours != this && distance < perception) {
            steering.add(neighbours.velocity)
            total ++
        }
    }
    if(total > 0){
        steering.div(total)
        steering.setMag(this.maxSpeed)
        steering.sub(this.velocity)
        steering.limit(this.maxForce)
    }
    //steering is the desired velocity - current velocity
    return steering
}

//steering value returned by previous function added to acceleration
flock(boids){
    this.acceleration = this.align(boids)

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
    //draws the flock inside the canvas. TO STYLE
    show(){
        strokeWeight(4)
        stroke(255);
        push();
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        triangle(4, 0, -4, 3, -4, -3);
        pop();
    
    }
}

