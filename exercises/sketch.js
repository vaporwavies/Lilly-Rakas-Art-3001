var rat;
var snuffy, lamp, vase, pillow;
var snuffyw, pupils, lampb, vaseb, pillowb;
var puff1, puff2, shard, rose; 

var as, ap, ar, als;
var ass, al, av, api;
var aw, alb, avb, apb;

var p1x, p1y, p2x, p2y;
var s1x, s1y, s2x, s2y;
var shx, shy;
var rx, ry;

var pupilmoveX, pupilmoveY;

var xSpeed, ySpeed, xSpeed2, ySpeed2, xS3, yS3, xS4, yS4, xS5, yS5, xS6, yS6;

function preload(){
  rat = loadImage('ratty.png');
  snuffy = loadImage("snufsleep.png");
  snuffyw = loadImage('snufwake.png');
  pupils = loadImage('pupils.png');
  lamp = loadImage('lamp.png');
  lampb = loadImage('lampdown.png');
  shade = loadImage('shade.png');
  vase = loadImage('vase.png');
  vaseb = loadImage('brokevase.png');
  pillow = loadImage('pillow.png');
  pillowb = loadImage('brokepillow.png')
  puff1 = loadImage("puff1.png");
  puff2 = loadImage("puff2.png");
  shard = loadImage("shard.png");
  rose = loadImage("rose.png");
}
function setup() {
  createCanvas (1200,700);
  as = 0;
  ap = 0;
  ar = 0;
  als = 0;

  ass = 255;
  al = 255;
  av = 255;
  api = 255;

  aw = 0;
  alb = 0;
  avb = 0;
  apb = 0;

  pupilmoveX = 0;
  pupilmoveY = 0;
 
  s1x = 400;
  s2x = 400;
  s1y = 150;
  s2y = 150;

  p1x = 450;
  p2x = 450;
  p1y = 200;
  p2y = 200;

  shx = 200;
  shy = 120;

  rx = 340;
  ry = 220;

  xSpeed = random(30);
  ySpeed = random(30);

  xSpeed2 = random(30);
  ySpeed2 = random(30);

  xS3 = random(30);
  yS3 = random(30);

  xS4 = random(30);
  yS4 = random(30);

  xS5 = random(30);
  yS5 = random(30);

  xS6 = random(30);
  yS6 = random(30);
}
function mouseClicked(){
  if (mouseX > 100 && mouseX < 170){
    aw = 255;
    ass = 0;
  }
  if (mouseX > 170 && mouseX < 250){
    alb = 255;
    als = 255;
    al = 0;
    shx = 200;
    shy = 120;
  }
  if (mouseX > 400 && mouseX <450){
    avb = 255;
    ar = 255;
    as = 255;
    av = 0;
    s1x = 400;
    s1y= 150;
    s2x = 400;
    s2y = 150;
    rx = 340;
    ry = 220;
  }
  if (mouseX > 450 && mouseX <530){
    apb = 255;
    ap = 255;
    api = 0;
    p1x = 450;
    p2x = 450;
    p1y = 200;
    p2y = 200;
  }
}
function mouseMoved(){
  s1x += xSpeed;
  s1y += ySpeed;

  s2x += xSpeed2;
  s2y += ySpeed2;

  p1x += xS3;
  p1y += yS3;

  p2x += xS4;
  p2y += yS4;

  shx += xS5;
  shy += yS5;

  rx += xS6;
  ry += yS6;
  
  if (s1x < 0 || s1x > width) {
    xSpeed *= -1;
  }
  if (s1y < 0  || s1y > height) {
    ySpeed *= -1;
  }

  if (s2x < 0 || s2x > width) {
    xSpeed2 *= -1;
  }
  if (s2y < 0  || s2y > height) {
    ySpeed2 *= -1;
  }

  if (p1x < 0 || p1x > width) {
    xS3 *= -1;
  }
  if (p1y < 0  || p1y > height) {
    yS3 *= -1;
  }
  if (p2x < 0 || p2x > width) {
    xS4 *= -1;
  }
  if (p2y < 0  || p2y > height) {
    yS4 *= -1;
  }

  if (shx < 0 || shx > width) {
    xS5 *= -1;
  }
  if (shy < 0  || shy > height) {
    yS5 *= -1;
  }

  if (rx < 0 || rx > width) {
    xS6 *= -1;
  }
  if (ry < 0  || ry > height) {
    yS6 *= -1;
  }

}


function draw() {
 background(255, 255, 255);

 tint(255, al);
 image(lamp, 170, 50);
 tint(255, alb);
 image(lampb, 150, 50);
 image(shade, shx, shy);

 if (mouseX < 100 ) {
   pupilmoveX = -2;
 }
 if (mouseX > 100 && mouseX < 170){
   pupilmoveX = 0;
 }
 if (mouseX > 170){
   pupilmoveX = 2;
 }
 if (mouseY < 100){
   pupilmoveY = -2;
 }
 if (mouseY > 100 && mouseY < 150){
   pupilmoveY = 0;
 }
 if (mouseY > 150){
   pupilmoveY = 2;
 }
 tint(255, ass);
 image(snuffy,100,100);
 tint(255,aw);
 image(snuffyw, 100,100);
 image(pupils, (100 + pupilmoveX), (100 + pupilmoveY));
 
 tint (255, as);
 image(shard, s1x, s1y);
 image(shard, s2x, s2y);

 tint(255, av);
 image(vase, 400, 150);
 tint(255,avb);
 image (vaseb, 400, 150);
 image(rose, rx, ry);

 tint(255, ap);
 image(puff1, p1x, p1y);
 image(puff2, p2x, p2y);

 tint(255,api);
 image(pillow, 450, 200);
 tint(255, apb);
 image(pillowb, 450,200);
 
 tint(255);
 image(rat, mouseX, mouseY);
}