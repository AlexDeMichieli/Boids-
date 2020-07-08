class Boid{
    constructor(){
    
    //Defines initial positon of the boid
    this.position = createVector(Math.floor(Math.random(0, windowWidth) * 1000), Math.floor(Math.random(0, windowHeight) * 1000))
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
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
align(){

}
    //draws the flock inside the canvas
    show(){
        strokeWeight(16)
        stroke(255);
        point(this.position.x, this.position.y);
    }
}

