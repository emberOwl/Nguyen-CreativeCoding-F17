var myShape1;
var myShape2;
var myShape3;

function preload() {
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	myShape1 = new Shape(40, 54, 10, 40, color(255, 0, 0));
	myShape2 = new Shape(90, 10, 50, 80, color(0, 255, 0));
}

function draw() {
	background(120, 120, 120);

	// first ball
	myShape1.display();
  	myShape1.animate();
  	// second ball
	myShape2.display();
  	myShape2.animate();
}

function Shape(x, y, min_size, max_size, color) {
	this.x = x;
	this.y = y;
	this.size = min_size;
	this.color = color;
	this.grow = 0.25;

	this.animate = function() {
		if (this.size > max_size || this.size < min_size) {
			this.grow *= -1;
		}
		this.size += this.grow;
	}

	this.display = function() {
		fill(this.color);
		rect(this.x, this.y, this.size, this.size);
	}
}