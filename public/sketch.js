const flock = [];

let valueSliders
let obstacle;


function Controls() {
	this.alignment = 50;
	this.cohesion = 50;
	this.separation = 50;
	this.speed = 4
	this.birds = 50
    this.obstacle = false
    this.radius = 20
}

  function addCircle(){
    	obstacle = new Obstacle(width/2,height/2);
        obstacle.setPosition(mouseX, mouseY);        
}

function setup() {
    

	createCanvas(windowWidth, windowHeight);
	
	let gui = new dat.GUI();
	valueSliders = new Controls();

	gui.add(valueSliders, 'alignment', 0, 50).step(1);
	gui.add(valueSliders, 'cohesion', 0, 50).step(1);
	gui.add(valueSliders, 'separation', 0, 50).step(1);
	gui.add(valueSliders, 'birds', 0, 200).step(1);
  	gui.add(valueSliders, 'obstacle');
  	gui.add(valueSliders, 'radius', 0, 200).step(1);


	obstacle = new Obstacle(width/2,height/2);

	//flock.push(new Boid());
	for (let i = 0; i < valueSliders.birds; i++) {
        pushBoid();
	}

	frameRate(60);
}

function draw() {
  

background(255)

  if(valueSliders.obstacle){
if(mouseIsPressed){
  addCircle();
}
  }

for (let boid of flock){
	//alignment
	boid.flock(flock)
	boid.show()
	boid.update()
	boid.edges()
	boid.check(obstacle);

   if(valueSliders.obstacle){
	obstacle.show();
	// obstacle.setPosition(mouseX, mouseY);
}
}

    // Adjust the amount of boids on screen according to the slider value
    let maxBoids = valueSliders.birds;
    let difference = flock.length - maxBoids;
    if (difference < 0) {
        for (let i = 0; i < -difference; i++) {
            pushBoid(); // Add boids if there are less boids than the slider value
        }
    } else if (difference > 0) {
        for (let i = 0; i < difference; i++) {
            flock.pop(); // Remove boids if there are more boids than the slider value
        }
    }
}

function pushBoid() {
    let boid = new Boid(); // Create a new boid
    flock.push(boid); // Add the new boid to the flock
}
