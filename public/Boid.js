class Boid{
    constructor(){
    
    this.r = 2.0
    //Defines initial positon of the boid
    this.position = createVector(Math.floor(Math.random(0, windowWidth/2) * 1000), Math.floor(Math.random(0, windowHeight/2) * 1000))
    //this creates an initial circle
    // this.position = createVector(windowWidth/2, windowHeight/2)
    this.velocity = p5.Vector.random2D()
    this.accelleration = createVector()
    }

//the Boid updates its positon bases on velocity and accelleration
update(){
    this.position.add(this.velocity)
    this.velocity.add(this.accelleration)
}

//1st of 3 important key rules. Alignment. 
//the boid alignes
align(){

}
    //draws the flock inside the canvas. TO STYLE
    show(){
        strokeWeight(4)
        stroke(255);
        // point(this.position.x, this.position.y);
        // triangle(this.position.x1, this.position.y1, 20, 30, 40, 20 )
        push();
        translate(this.position.x, this.position.y);
        rotate(this.velocity.heading());
        triangle(4, 0, -4, 3, -4, -3);
        pop();
    
    }
}

