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
	//rect(40, 40, 10, 20);

	push();
	translate(80, 40);
	rotate(PI/3.0);
	rect(0, 0, 10, 20);
	pop();

	push();
	translate(120, 40);
	rotate(PI * 2/3.0);
	rect(0, 0, 10, 20);
	pop();

	push();
	translate(160, 40);
	rotate(PI);
	rect(0, 0, 10, 20);
	pop();

	/*
		push();
		translate(200, 40);
		rotate(PI * 4 / 3);
		rect(0, 0, 10, 20);
		pop();

		push();
		translate(240, 40);
		rotate(PI * 5 / 3);
		rect(0, 0, 10, 20);
		pop();

		push();
		translate(280, 40);
		rotate(PI * 2);
		rect(0, 0, 10, 20);
		pop();
		
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
	*/
}