var myMappedBlueValue;
var mappedSize;

var constraintedVal;
var mappedVal;
function setup() {
  createCanvas(600, 600);
  background(255, 255, 255);
}

function draw() {
	// draw one row of static rotated rectangles
	fill(120, 0, 120);


	// loops this time	
	var loopX = 80;
	var loopY = 80;
	for(var i = 0; i < 3; i++) {
		push();
		translate(loopX + (i * 40)  , 80);
		rotate(PI * (i + 1)/3.0);
		rect(0, 0, 10, 20);
		pop();

	}
}