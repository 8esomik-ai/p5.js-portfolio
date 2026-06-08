let bgColor;
let faceColor = [255, 224, 200];
let mouthColor = [230, 120, 130];

function setup() {
  createCanvas(600, 400);
  bgColor = color(255, 250, 200);
}

function draw() {
  background(bgColor);
  
  noStroke();
  fill(110, 70, 40);
  ellipse(300, 190, 240, 280);
  
  fill(faceColor[0], faceColor[1], faceColor[2]);
  noStroke();
  arc(225, 190, 50, 40, HALF_PI, PI + HALF_PI);
  arc(375, 190, 50, 40, -HALF_PI, HALF_PI);
  ellipse(300, 180, 160, 200);
  
  rect(285, 260, 30, 50);

  fill(255);
  stroke(0);
  strokeWeight(1); 
  ellipse(260, 170, 40, 24);
  ellipse(340, 170, 40, 24);
  
  let eyeMoveX = map(mouseX, 0, width, -5, 5);
  let eyeMoveY = map(mouseY, 0, height, -3, 3);
  fill(60, 40, 30);
  noStroke();
  ellipse(260 + eyeMoveX, 170 + eyeMoveY, 14, 14);
  ellipse(340 + eyeMoveX, 170 + eyeMoveY, 14, 14);
  
  stroke(50);
  strokeWeight(2);
  line(240, 145, 280, 145);
  line(320, 145, 360, 145);
  stroke(0);
  strokeWeight(1);
  line(300, 185, 295, 205);
  line(295, 205, 305, 205);

  noStroke();
  fill(mouthColor[0], mouthColor[1], mouthColor[2]);
  if (mouseIsPressed) {
    ellipse(300, 235, 40, 40); 
  } else {
    arc(300, 235, 60, 35, 0, PI);
  }

  fill(255, 180, 190, 150);
  ellipse(245, 195, 30, 15);
  ellipse(355, 195, 30, 15); 

  fill(180);
  ellipse(220, 205, 6, 6);
  ellipse(380, 205, 6, 6);
  
  stroke(110, 70, 40);
  strokeWeight(4);
  line(280, 110, 270, 150);
  line(300, 95, 300, 155);
  line(320, 110, 330, 150);
  
  noStroke();
  fill(110, 70, 40);
  let hairWave = sin(frameCount * 0.1) * 5;
  push();
  translate(260, 110);
  rotate(radians(50 + hairWave));
  ellipse(0, 0, 40, 120);
  pop();
  push();
  translate(340, 110);
  rotate(radians(-50 - hairWave));
  ellipse(0, 0, 40, 120);
  pop();

  fill(235);
  noStroke();
  rect(200, 300, 200, 200, 40);
}

function keyPressed() {
  if (key === 's') {
    saveGif('myCharacter', 10); 
  } else {
    bgColor = color(random(200, 255), random(200, 255), random(200, 255));
  }
}