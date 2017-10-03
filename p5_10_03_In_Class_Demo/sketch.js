var myMappedBlueValue;
var mappedSize;

var constraintedVal;
var mappedVal;
function setup() {
  createCanvas(600, 600);
  background(255, 255, 255);
}

function draw() {
	/*xPos = 20;
	yPos = 20;
	for(var i = 0; i < 10; i++) {
		xPos = 20;
		for(var j = 0; j < 10; j++) {
			// change fill from white to black
			fill(255 - (20 * (i + j)), 255 - (20 * (i + j)), 255 - (20 * (i + j)));
			// draw rectangle
			rect(xPos, yPos, 10, 10);
			xPos += 20;
		}
		yPos += 20;
	}*/

	/*
	myMappedBlueValue = map(mouseY, 0, height 0, 255);
	mappedSize = map(mouseX, 0, width, 40, 400);

	fill(0, 0, myMappedBlueValue);
	ellipse(width/2, height/2, mappedSize, mappedSize);
	*/

	line(100, 0, 100, height);
	line(500, 0, 500, height);

	constraintedVal = constrain(mouseX, 100,500);
	mappedVal = map(mouseX, 0, width, 100, 500);

	fill(255, 0, 0);
	ellipse(constraintedVal, 2/3 * height, 30, 30);

	mappedRot = nap(mouseX, 0, width, 0, height);
	push();
	rotate(mappedRot);
	pop();
	translate(200, 200);
}