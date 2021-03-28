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

var xSpeed, ySpeed, xSpeed2, ySpeed2, xS3, yS3, xS4, yS4;

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
  createCanvas (800,700);
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

  xSpeed = 15;
  ySpeed = 15;

  xSpeed2 = 10;
  ySpeed2 = 20;
}
function mouseClicked(){
  if (mouseX > 100 && mouseX < 150){
    aw = 255;
    ass = 0;
  }
  if (mouseX > 150 && mouseX < 200){
    alb = 255;
    als = 255;
    al = 0;
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
  }
  if (mouseX > 450 && mouseX <500){
    apb = 255;
    ap = 255;
    api = 0;
  }
}
function mouseMoved(){
  s1x += xSpeed;
  s1y += ySpeed;

  s2x += xSpeed2;
  s2y += ySpeed2;
  
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

}


function draw() {
 background(255, 255, 255);

 tint(255, al);
 image(lamp, 150, 50);
 tint(255, alb);
 image(lampb, 150, 50);
 image(shade, shx, shy);

 tint(255, ass);
 image(snuffy,100,100);
 tint(255,aw);
 image(snuffyw, 100,100);
 image(pupils, 100, 100);
 
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