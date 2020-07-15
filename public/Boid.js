

class Boid{
    constructor(){
    
    //Defines initial positon of the boid
    // this.position = createVector(windowWidth/2, windowHeight/2 )
    this.position = createVector(windowWidth/2, windowHeight/2 )
    this.velocity = p5.Vector.random2D()
    this.velocity.setMag(random(2, 4))
    this.acceleration = createVector()

    //steering force determines alignment and the ability to take other's direction
    this.maxForce = 0.2
    this.maxSpeed = 4
    }

//the Boid updates its positon based on velocity and accelleration
update(){
    this.position.add(this.velocity)
    this.velocity.add(this.acceleration)
    this.velocity.limit(this.maxSpeed)
    this.acceleration.mult(0)
}

//1st of 3 important key rules. Alignment.
//Steer towards the average heading of local flockmates 
//the boid alignes to nearby flockmates. It has a limited range of visibility.
align(boids){
//should be slider/dat.gui = alignment.
    let perception = valueSliders.alignment
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

    // Alignment
    let alignment = this.align(boids)
    this.acceleration.add(alignment)

    //Cohesion
    let cohesion = this.cohesion(boids)
    this.acceleration.add(cohesion)

    //Separation
    let seaparation = this.separation(boids)
    this.acceleration.add(seaparation)
}

//Chesion: steer to move toward the average position of local flockmates
cohesion(boids){

    //should be slider/dat.gui = cohesion.
    let perception = valueSliders.cohesion
    let total = 0
    let avgLocation = createVector()
    for (let neighbours of boids){
        let distance = dist(this.position.x, 
                            this.position.y, 
                            neighbours.position.x, 
                            neighbours.position.y
                            )
        if(neighbours != this && distance < perception) {
            avgLocation.add(neighbours.position)
            total ++
        }
    }
    if(total > 0){
        //average location in this case
        avgLocation.div(total)
        avgLocation.sub(this.position)
        avgLocation.setMag(this.maxSpeed)
        avgLocation.sub(this.velocity)
        avgLocation.limit(this.maxForce)
    }
    return avgLocation
}

//steer away to avoid crowding
//the magnitude of vector is inversely proportional to the distance of the local flockmate
separation(boids){

    let perception = valueSliders.separation
    let total = 0
    let avgLocation = createVector()
    for (let neighbours of boids){
        let distance = dist(this.position.x, 
                            this.position.y, 
                            neighbours.position.x, 
                            neighbours.position.y
                            )
        if(neighbours != this && distance < perception) {
            let difference = p5.Vector.sub(this.position, neighbours.position)
            //the difference is inverseley proportional to the distance. The farther away, the lower the magnitude.
            difference.div(distance)
            avgLocation.add(difference)
            total ++
        }
    }
    if(total > 0){
        //average location in this case
        avgLocation.div(total)
        avgLocation.setMag(this.maxSpeed)
        avgLocation.sub(this.velocity)
        avgLocation.limit(this.maxForce)
    }
    return avgLocation

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
        strokeWeight(1)
        fill(0)
        // stroke(255);
        push();
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        triangle(4, 0, -4, 3, -4, -3);
        pop();
    
    }
}

