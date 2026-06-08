function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(200, 230, 255);
  let t = frameCount * 0.03;
  
  let sizeOsc = sin(t) * 15;
  fill(255, 220, 230);
  ellipse(302, 198, 320 + sizeOsc, 320 + sizeOsc);

  fill(120, 200, 120);
  rect(217, 205, 10, 120);
  rect(392, 162, 10, 120);
  rect(338, 292, 10, 90);

  let flower1Y = sin(t * 1.5) * 5;
  push();
  translate(0, flower1Y);
  fill(255, 170, 200);
  ellipse(200, 182, 60, 60);
  ellipse(237, 183, 60, 60);
  ellipse(218, 147, 60, 60);
  ellipse(222, 212, 60, 60);
  fill(255, 230, 120);
  ellipse(220, 182, 40, 40);
  pop();

  let flower2X = cos(t * 1.5) * 5;
  push();
  translate(flower2X, 0);
  fill(200, 170, 255);
  ellipse(382, 142, 50, 50);
  ellipse(418, 138, 50, 50);
  ellipse(400, 108, 50, 50);
  ellipse(402, 172, 50, 50);
  fill(255, 230, 120);
  ellipse(400, 140, 30, 30);
  pop();

  let colorRatio = (sin(t) + 1) / 2;
  let c1 = color(170, 255, 220);
  let c2 = color(220, 180, 255);
  let dynamicColor = lerpColor(c1, c2, colorRatio);
  
  fill(dynamicColor);
  ellipse(320, 272, 50, 50);
  ellipse(362, 268, 50, 50);
  ellipse(338, 242, 50, 50);
  ellipse(342, 302, 50, 50);
  fill(255, 230, 120);
  ellipse(340, 270, 30, 30);

  fill(150, 255, 150);
  triangle(200, 262, 150, 302, 232, 298);
  triangle(402, 242, 452, 278, 378, 282);
  triangle(338, 322, 298, 362, 362, 358);

  let flyX1 = cos(t * 2) * 20;
  let flyY1 = sin(t * 2) * 15;
  push();
  translate(flyX1, flyY1);
  fill(255, 180, 200);
  ellipse(480, 80, 40, 50);
  ellipse(520, 75, 40, 50);
  fill(255, 200, 120);
  rect(498, 70, 4, 40);
  fill(200, 100, 200);
  triangle(495, 70, 500, 60, 505, 70);
  pop();

  let flyX2 = cos(t * 1.2) * 10;
  let flyY2 = sin(t * 2.5) * 12;
  push();
  translate(flyX2, flyY2);
  fill(180, 200, 255);
  ellipse(100, 92, 35, 45);
  ellipse(135, 88, 35, 45);
  fill(255, 200, 120);
  rect(115, 80, 4, 40);
  fill(200, 100, 200);
  triangle(112, 80, 117, 70, 122, 80);
  pop();

  let flyX3 = sin(t * 2) * 15;
  let flyY3 = sin(t * 4) * 8;
  push();
  translate(flyX3, flyY3);
  fill(200, 255, 180);
  ellipse(262, 62, 25, 35);
  ellipse(285, 58, 25, 35);
  fill(255, 180, 120);
  rect(272, 55, 3, 30);
  fill(150, 100, 255);
  triangle(270, 55, 273, 48, 276, 55);
  pop();

  fill(190, 240, 190);
  triangle(0, 400, 20, 360, 40, 400);
  triangle(50, 400, 70, 355, 90, 400);
  triangle(140, 400, 160, 350, 180, 400);
  triangle(185, 400, 205, 360, 225, 400);
  triangle(260, 400, 280, 355, 300, 400);
  triangle(310, 400, 330, 365, 350, 400);
  triangle(400, 400, 420, 350, 440, 400);
  triangle(460, 400, 480, 360, 500, 400);
  triangle(520, 400, 540, 355, 560, 400);
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    saveGif('과제4. 움직이는 추상화', 5);
  }
}