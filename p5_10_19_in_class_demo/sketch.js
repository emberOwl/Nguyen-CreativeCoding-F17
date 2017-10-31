var myFont;
var currState;

function preload() {
	myFont = loadFont("assets/Dosis-Light.ttf");
}

function setup() {
	createCanvas(600, 600);

	textFont(myFont);

	textSize(40);

	fill(255, 0, 123);

	text("hi", 100, 100);
}

function draw() {
	if (currState == 1){
		background(0, 0, 0);
	}
	else if (currState == 1) {
		background(255, 0, 0);
	}
	else if (currState == 2) {
		background(0, 255, 0);
	}
	else {
		background(0, 0, 255);
	}
}

function mousePressed() {
	if (currState < 2) {
		currState++;
	}
	else {
		currState = 0;
	}
}