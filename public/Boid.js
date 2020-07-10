class Boid{
    constructor(){
    
    //Defines initial positon of the boid
    // this.position = createVector(windowWidth/2, windowHeight/2 )
    this.position = createVector(random(width), random(height) )

    //this creates an initial circle
    // this.position = createVector(windowWidth/2, windowHeight/2)
    this.velocity = p5.Vector.random2D()
    this.velocity.setMag(random(2, 4))
    this.acceleration = createVector()
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
        steering.sub(this.velocity)
    }
    // average.div(neighbours.lenght)
    return steering
}

//steering value returned by previous function added to acceleration
flock(boids){
    let aligment = this.align(boids)
    this.acceleration = aligment

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

