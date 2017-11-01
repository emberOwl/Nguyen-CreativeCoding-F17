var myShape1;
var myShape2;
var myShape3;
var mySound;

function preload() {
  // load font
  mySound = loadSound('assets/ding.mp3');
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	myShape1 = new Shape(40, 54, 30, 40, 30, color(255, 0, 0));
	myShape2 = new Shape(90, 0, 8, 10, 70, color(0, 255, 0));
	myShape3 = new Shape(80, 0, 100, 60, 5, color(0, 0, 255));
}

function draw() {
	background(120, 120, 120);

	// first ball
	myShape1.display();
  	myShape1.animate();
  	// second ball
	myShape2.display();
  	myShape2.animate();
  	// third ball
	myShape3.display();
  	myShape3.animate();
}

function Shape(x, y, xVel, yVel, size, color) {
	this.x = 0;
	this.y = 0;
	this.xVel = xVel;
	this.yVel = yVel;
	this.color = color;
	this.size = size;

	this.animate = function() {
		this.x += this.xVel;
		this.y += this.yVel;
		if (this.x > windowWidth || this.x < 0) {
			this.xVel *= -1;
			mySound.play();
		}
		if (this.y > windowHeight || this.y < 0) {
			this.yVel *= -1;
			mySound.play();
		}
	}

	this.display = function() {
		fill(this.color);
		ellipse(this.x, this.y, this.size, this.size);
	}
}