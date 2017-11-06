var piano = [];
var guitar = [];
var pianoSounds = [];
var guitarSounds = [];
var kazoo;

function preload() {
	// load pianoSounds
	pianoSounds[0] = loadSound('assets/piano/68437__pinkyfinger__piano-a.wav');
	pianoSounds[1] = loadSound('assets/piano/68438__pinkyfinger__piano-b.wav');
	pianoSounds[2] = loadSound('assets/piano/68440__pinkyfinger__piano-c.wav');
	pianoSounds[3] = loadSound('assets/piano/68442__pinkyfinger__piano-d.wav');
	pianoSounds[4] = loadSound('assets/piano/68443__pinkyfinger__piano-e.wav');
	pianoSounds[5] = loadSound('assets/piano/68445__pinkyfinger__piano-f.wav');
	pianoSounds[6] = loadSound('assets/piano/68447__pinkyfinger__piano-g.wav');
	
	// sharps
	pianoSounds[7] = loadSound('assets/piano/68439__pinkyfinger__piano-bb.wav');
	pianoSounds[8] = loadSound('assets/piano/68441__pinkyfinger__piano-c.wav');
	pianoSounds[9] = loadSound('assets/piano/68444__pinkyfinger__piano-eb.wav');
	pianoSounds[10] = loadSound('assets/piano/68446__pinkyfinger__piano-f.wav');
	pianoSounds[11] = loadSound('assets/piano/68448__pinkyfinger__piano-g.wav');

	// load guitarSounds
	guitarSounds[0] = loadSound('assets/guitar/192197__biblicalbricksproductions__a-major-guitar.wav');
	guitarSounds[1] = loadSound('assets/guitar/192198__biblicalbricksproductions__b-major-guitar.wav');
	guitarSounds[2] = loadSound('assets/guitar/192199__biblicalbricksproductions__c-major-guitar.wav');
	guitarSounds[3] = loadSound('assets/guitar/192200__biblicalbricksproductions__d-major-guitar.wav');
	guitarSounds[4] = loadSound('assets/guitar/192201__biblicalbricksproductions__e-major-guitar.wav');
	guitarSounds[5] = loadSound('assets/guitar/192204__biblicalbricksproductions__f-major-guitar.wav');
	guitarSounds[6] = loadSound('assets/guitar/192203__biblicalbricksproductions__g-major-guitar.wav');

	// load kazoo
	kazoo = loadSound('assets/321937__pel2na__two-kazoo-fanfare.wav')
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	// PianoKey(x, y, xVel, yVel, size, color, sound)
	for (var i = 0; i < pianoSounds.length; i++) {
		var size, keyColor, speed;
		var x = Math.floor((Math.random() * windowWidth) + 1);
		var y = Math.floor((Math.random() * windowHeight) + 1);
		if (i > 6) {
			size = 5;
			keyColor = color(0, 0, 0);
			speed = 10;
		}
		else {
			size = 20;
			keyColor = color(255, 255, 255);
			speed = 5;
		}

		// populate piano array
		piano[i] = new PianoKey(x, y, speed, speed, size, size + 10, keyColor, pianoSounds[i]);
	}

	// guitarChord(x, y, size, color, sound) 
	for (var i = 0; i < guitarSounds.length; i++) {
		var x = Math.floor((Math.random() * windowHeight/3) + 1);
		var y = Math.floor((Math.random() * windowHeight/3) + 1);
		var chordColor = color(Math.floor((Math.random() * 255) + 1), Math.floor((Math.random() * 255) + 1), Math.floor((Math.random() * 255) + 1));

		// populate piano array
		guitar[i] = new GuitarChord(x, y, 40, chordColor, guitarSounds[i]);
	}
}

function draw() {
	background(180, 180, 180);

	for (var i = 0; i < guitar.length; i ++) {
		push();
		translate(width*0.5, height*0.5);
		//translate(guitar[i].size, guitar[i].size);
		rotate(frameCount / guitar[i].spin);
		guitar[i].display();
		pop();
	}

	for (var i = 0; i < piano.length; i ++) {
		piano[i].display();
		piano[i].animate();
	}
}

function PianoKey(x, y, xVel, yVel, minSize, maxSize, keyColor, sound) {
	this.x = x;
	this.y = y;
	this.xVel = xVel;
	this.yVel = yVel;
	this.size = minSize;
	this.keyColor = keyColor;
	this.sound = sound;
	this.grow = Math.random() * 10;

	this.animate = function() {
		this.x += this.xVel;
		this.y += this.yVel;
		if (this.x > windowWidth || this.x < 0) {
			this.xVel *= -1;
			this.sound.setVolume(this.grow);
			this.sound.play();
		}
		if (this.y > windowHeight || this.y < 0) {
			this.yVel *= -1;
			this.sound.setVolume(this.grow);
			this.sound.play();
		}
		if (this.size > maxSize || this.size < minSize) {
			this.grow *= -1;
		}
		this.size += this.grow;
	}

	this.display = function() {
		fill(this.keyColor);
		ellipse(this.x, this.y, this.size, this.size);
	}
}

function GuitarChord(x, y, size, chordColor, sound) {
	this.x = x;
	this.y = y;
	this.size = size;
	this.chordColor = chordColor;
	this.sound = sound;
	this.spin = Math.random() * 200;

	this.display = function() {
		var red = Math.floor((Math.random() * 255) + 1);
		this.chordColor = color(red, Math.floor((Math.random() * 255) + 1), Math.floor((Math.random() * 255) + 1));
		if (red >  120) {
			this.sound.play();
		}
		fill(this.chordColor);
		rect(this.x, this.y, this.size, this.size);
	}
}

function mouseClicked(){
	kazoo.play();
}