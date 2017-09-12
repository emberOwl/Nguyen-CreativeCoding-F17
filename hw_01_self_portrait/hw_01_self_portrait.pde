// dark purple background
size(600, 600);
background(40, 0, 85);

// flowing hair
fill(#003366);
rect(100, 100, 500, 400, 100);

// brown frame
fill(250, 105, 85);
rect(0, 0, 600, 35);
rect(0, 35, 35, 600);
rect((600-35), 0, 35, 600);
rect(0, (600-35), 600, 35);

// face
fill(0, 15, 255);
rect(100, 70, 200, 300, 100);

// green contour
fill(0, 255, 0);
triangle(300, 220, 260, 280, 300, 250);
triangle(100, 220, 140, 280, 100, 250);
rect(195, 200, 5, 100, 100);
rect(220, 200, 5, 100, 100);

// nose
fill(#ffcc00);
rect(200, 200, 20, 100, 100);

// highlight
fill(237, 18, 123);
triangle(110, 220, 170, 280, 185, 220);
triangle(300, 220, 250, 280, 225, 220);

// upper lip
fill(96, 7, 143);
translate(width/2, height/2);
rotate(PI);
arc(90, -30, 30, 30, 0, PI);

// lower lip
translate(width/2, height/2);
rotate(PI);
fill(131, 18, 243);
arc(210, 330, 20, 20, 0, PI);

// "whites" of eyes
fill(102, 102, 153);
ellipse(155, 195, 50, 40);
ellipse(255, 195, 50, 40);

// pupils
fill(0, 255, 255);
ellipse(155, 195, 50, 20);
ellipse(255, 195, 50, 20);

// eyelids
fill(102, 51, 0);
ellipse(155, 197, 17, 17);
ellipse(255, 197, 17, 17);


// eyebrows
fill(255, 255, 0);
stroke(#ffff00);
line(135, 170, 155, 165);
line(155, 165, 175, 170);

line(235, 170, 255, 165);
line(255, 165, 275, 170);

// "wavy" hair
noStroke();
translate(width/2, height/2);
rotate(PI);
fill(#003366);
arc(90, 180, 200, 130, 0, PI);

ellipse(-30, 200, 40, 40);
ellipse(-70, 200, 40, 40);
ellipse(-110, 200, 40, 40);
ellipse(-150, 200, 40, 40);
ellipse(-190, 200, 40, 40);
ellipse(-230, 200, 40, 40);

// bottom curves
ellipse(-30, -200, 40, 40);
ellipse(-70, -200, 40, 40);
ellipse(-110, -200, 40, 40);
ellipse(-150, -200, 40, 40);
ellipse(-190, -200, 40, 40);
ellipse(-230, -200, 40, 40);

// body
fill(#cc0000);
arc(90, -265, 200, 370, 0, PI);

// save image for posting
save("self_portrait.jpg");