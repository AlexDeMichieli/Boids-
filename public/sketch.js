const flock = [];


function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 20; i++){
		flock.push(new Boid())

	}
	// flock.push(new Boid())

	frameRate(60);

}

function draw() {
background(51)

for (let boid of flock){
	boid.flock(flock)
	boid.show()
	boid.update()
}

}