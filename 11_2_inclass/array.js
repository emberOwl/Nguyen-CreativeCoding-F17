var myArray = [];
var ballArray = [];

function preload() {
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	myArray[0] = 3;
	myArray[1] = 7;

	ball1 = new Ball(200, 200);
	ball1.display();

	ballArray[0] = new Ball(100, 200);
	ballArray[0].display();
}

function draw() {
}

function Ball(x, y) {
	this.x = x;
	this.y = y;

	this.display = function() {
		rect(this.x, this.y, this.size, this.size);
	}
}