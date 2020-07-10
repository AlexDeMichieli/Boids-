const flock = [];


function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 200; i++){
		flock.push(new Boid())

	}
	// flock.push(new Boid())

	frameRate(60);

}

function draw() {
background(51)

for (let boid of flock){
	//alignment
	boid.flock(flock)
	boid.show()
	boid.update()
	boid.edges()
}

}