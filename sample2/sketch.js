function setup() {
  createCanvas(600, 400);
  background(255, 250, 200);
}

function draw() {
  noStroke();
  fill(110, 70, 40);
  ellipse(300, 190, 240, 280);
  
  noStroke();
  fill(255, 224, 200);
  ellipse(300, 180, 160, 200);

  rect(285, 260, 30, 50);
  fill(255);
  stroke(0);
  ellipse(260, 170, 40, 24);
  ellipse(340, 170, 40, 24);
  
  fill(60, 40, 30);
  noStroke();
  ellipse(260, 170, 14, 14);
  ellipse(340, 170, 14, 14);
  
  stroke(50);
  strokeWeight(2);
  line(240, 145, 280, 145);
  line(320, 145, 360, 145);
  
  stroke(0);
  strokeWeight(1);
  line(300, 185, 295, 205);
  line(295, 205, 305, 205);

  fill(230, 120, 130);
  noStroke();
  arc(300, 235, 60, 35, 0, PI);

  fill(255, 180, 190);
  ellipse(245, 195, 30, 15);
  ellipse(355, 195, 30, 15); 
  
  fill(50);
  ellipse(280, 260, 3, 3);
  
  stroke(110, 70, 40);
  strokeWeight(1);
  noFill();

  stroke(110, 70, 40);
  strokeWeight(4);
  noFill();

  line(280, 110, 270, 150);
  line(300, 95, 300, 155);
  line(320, 110, 330, 150);
  
  strokeWeight(1);
  
  noStroke();
  fill(235);
  rect(200, 300, 200, 200, 40);
  
  noStroke();
  fill(110, 70, 40);
  push();
  translate(260, 110);
  rotate(radians(50));
  ellipse(0, 0, 40, 120);
  pop();
  push();
  translate(340, 110);
  rotate(radians(-50));
  ellipse(0, 0, 40, 120);
  pop();
  
  noStroke();
  fill(255, 224, 200);
  arc(225, 190, 50, 40, HALF_PI, PI + HALF_PI);
  arc(375, 190, 50, 40, -HALF_PI, HALF_PI);
  
  fill(180);
  noStroke();
  ellipse(220, 205, 6, 6);
  ellipse(380, 205, 6, 6);
}