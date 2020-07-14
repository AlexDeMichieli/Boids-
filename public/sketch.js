const flock = [];


let valueSliders

function Controls() {
	this.alignment = 50;
	this.cohesion = 50;
	this.separation = 50;
}

function setup() {
	
	createCanvas(windowWidth, windowHeight);
	
	let gui = new dat.GUI();
	valueSliders = new Controls();

	gui.add(valueSliders, 'alignment', 0, 50).step(1);
	gui.add(valueSliders, 'cohesion', 0, 50).step(1);
	gui.add(valueSliders, 'separation', 0, 50).step(1);
	
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