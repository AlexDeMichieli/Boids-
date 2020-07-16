const flock = [];
const predator = []

let valueSliders

function Controls() {
	this.alignment = 50;
	this.cohesion = 50;
	this.separation = 50;
	this.speed = 4
	this.birds = 50
}

function setup() {
	
	createCanvas(windowWidth, windowHeight);
	
	let gui = new dat.GUI();
	valueSliders = new Controls();

	gui.add(valueSliders, 'alignment', 0, 50).step(1);
	gui.add(valueSliders, 'cohesion', 0, 50).step(1);
	gui.add(valueSliders, 'separation', 0, 50).step(1);
	gui.add(valueSliders, 'birds', 0, 200).step(1);

	//flock.push(new Boid());
	for (let i = 0; i < valueSliders.birds; i++) {
        pushBoid();
	}

	for (let i = 0; i < 2; i++) {
		predator.push(new Predator())
	}

	frameRate(60);
}

function draw() {
background(255)


for (let boid of flock){
	//alignment

	boid.flock(flock)
	boid.show()
	boid.update()
	boid.edges()
}

for (let killer of predator){
	//alignment
	killer.display()
	killer.update()
	killer.edges()
	// killer.lockPredator()

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

