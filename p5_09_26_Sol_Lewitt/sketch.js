function setup() {
  createCanvas(600, 600);
  background(255, 255, 255);
}

function draw() {

	/* FRONT FACE */

	xPos = 20;
	yPos = 140;
	for(var i = 0; i < 11; i++) {
		strokeWeight(4);
		line(xPos, yPos, xPos + (100), yPos );
		yPos += 10;
	}
	for(var i = 0; i < 11; i++) {
		strokeWeight(4);
		line(xPos, yPos, xPos + (200), yPos );
		yPos += 10;
	}

	// outline front face
	strokeWeight(4);
	// left
	line(xPos, 140, xPos, yPos - 10);
	// middle
	line(xPos + (100), 140, xPos + (100), 70 + yPos/2);
	// right
	line(xPos + 200, 250, xPos + 200, yPos - 10);

	/* TOP FACE */

	//left
	xPos = 20;
	yPos = 140;
	for(var i = 0; i < 7; i++) {
		strokeWeight(4);
		line(xPos + i, yPos, xPos + 100, yPos - 100);
		xPos += 15;
	}
	// right
	for(var i = 0; i < 6; i++) {
		strokeWeight(4);
		line(xPos + 55 + i, yPos - 50, xPos + 100, yPos - 100);
		xPos += 15;
	}

	// close top
	strokeWeight(4);
	// left
	line(120, 40, 302, 38);
	// close top
	strokeWeight(4);
	// right
	line(165, 90, 260, 89);

	/* RIGHT FACE */
	line(302, 40, 302, 225);
	line(223, 348, 302, 227);
	
	// back vertical
	xPos = 292;
	yPos = 45;
	for (var i = 0; i < 4; i++) {
		line(xPos, yPos + 5, xPos, yPos + (195));
		xPos -= 10;
		yPos += 15;
	}

	line(220, 250, 262, 190);

	// front vertical
	xPos = 250;
	yPos = 205;
	for (var i = 0; i < 4; i++) {
		line(xPos, yPos + 5, xPos, yPos + (95));
		xPos -= 10;
		yPos += 15;
	}

	/* INTERNAL FACE */
	line(163, 90, 163, 190);
	line(163, 190, 262, 190);

	// horizontal lines
	xPos = 163;
	yPos = 190;
	for (var i = 0; i < 11; i++) {
		line(xPos, yPos, xPos + (262 - 163), yPos);
		yPos -= 10;
	}

	// diagonal connect
	line(163, 190, 120, 250);
	
	// diagonal lines
	xPos = 178;
	yPos = 190;
	for (var i = 0; i < 6; i++) {
		line(xPos, 190, xPos - (45), 250);
		xPos += 15;
	}

	// top diagonal
	xPos = 130;
	yPos = 125;
	for (var i = 0; i < 3; i++) {
		line(xPos, yPos, xPos, yPos + 105);
		xPos += 10;
		yPos -= 10;
	}
}
