//images
var rat;
var snuffy, lamp, vase, pillow;
var snuffyw, pupils, lampb, vaseb, pillowb;
var puff1, puff2, shard, rose; 
var burg1, burg2, burg3, burg4, burg5, burg6, burg7, burg8, burg9;
var blankie, blankierat;
var computer, computeroff;

//alphas
var as, ap, ar, als; 
var ass, al, av, api;
var aw, alb, avb, apb;
var ab1, ab2, ab3, ab4, ab5, ab6, ab7, ab8, ab9;
var abl, ablr;
var ac, aco;

//coordinates
var p1x, p1y, p2x, p2y, pM;
var s1x, s1y, s2x, s2y, sM;
var shx, shy, shM;
var rx, ry, rM;
var bx1, bx2, bx3,bx4,bx5,bx6,bx7,bx8,bx9;

var pupilmoveX, pupilmoveY;

//speeds
var xSpeed, ySpeed, xSpeed2, ySpeed2, xS3, yS3, xS4, yS4, xS5, yS5, xS6, yS6;

//modifiers
var bM;

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
  burg1 = loadImage('burg1.png');
  burg2 = loadImage('burg2.png');
  burg3 = loadImage('burg3.png');
  burg4 = loadImage('burg4.png');
  burg5 = loadImage('burg5.png');
  burg6 = loadImage('burg6.png');
  burg7 = loadImage('burg7.png');
  burg8 = loadImage('burg8.png');
  burg9 = loadImage('burg9.png');
  blankie = loadImage('blankie1.png');
  blankierat = loadImage('blankie2.png');
  computer = loadImage('comp1.png');
  computeroff = loadImage('comp2.png')
  ratroom = loadImage('ratroom.png');
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

  ab1 = 255;
  ab2 = 0;
  ab3 = 0;
  ab4 = 0;
  ab5 = 0;
  ab6 = 0;
  ab7 = 0;
  ab8 = 0;
  ab9 = 0;

  abl = 255;
  ablr = 0;

  ac = 255;
  aco = 0;

  pupilmoveX = 0;
  pupilmoveY = 0;
 
  s1x = 375;
  s2x = 375;
  s1y = 460;
  s2y = 460;
  sM = 0;

  p1x = 630;
  p2x = 630;
  p1y = 460;
  p2y = 460;
  pM = 0;

  shx = 200;
  shy = 460;
  shM= 0;

  rx = 340;
  ry = 460;
  rM= 0;

  bx1 =800;
  bx2= 1200;
  bx3= 1200;
  bx4= 1200;
  bx5= 1200;
  bx6= 1200;
  bx7 = 1200;
  bx8 =1200;
  bx9=1200;

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

function mouseMoved(){

  p1x += xS3;
  p1y += yS3;

  p2x += xS4;
  p2y += yS4;

  shx += xS5;
  shy += yS5;

  rx += xS6;
  ry += yS6;
  
  if (p1x < 0 || p1x > width) {
    xS3 *= -1;
  }
  if (p1y < 459  || p1y > height) {
    yS3 *= -1;
  }
  if (p2x < 0 || p2x > width) {
    xS4 *= -1;
  }
  if (p2y < 459  || p2y > height) {
    yS4 *= -1;
  }

  if (shx < 0 || shx > width) {
    xS5 *= -1;
  }
  if (shy < 459  || shy > height) {
    yS5 *= -1;
  }

  if (rx < 0 || rx > width) {
    xS6 *= -1;
  }
  if (ry < 459  || ry > height) {
    yS6 *= -1;
  }

}

function reset(){
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

  ab1 = 255;
  ab2 = 0;
  ab3 = 0;
  ab4 = 0;
  ab5 = 0;
  ab6 = 0;
  ab7 = 0;
  ab8 = 0;
  ab9 = 0;

  abl = 255;
  ablr = 0;

  ac = 255;
  aco = 0;

  pupilmoveX = 0;
  pupilmoveY = 0;
 
  s1x = 375;
  s2x = 375;
  s1y = 460;
  s2y = 460;
  sM = 0;

  p1x = 630;
  p2x = 630;
  p1y = 460;
  p2y = 460;
  pM = 0;

  shx = 200;
  shy = 460;
  shM= 0;

  rx = 340;
  ry = 460;
  rM= 0;

  bx1 =800;
  bx2= 1200;
  bx3= 1200;
  bx4= 1200;
  bx5= 1200;
  bx6= 1200;
  bx7 = 1200;
  bx8 =1200;
  bx9=1200;

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

function draw() {
 background(255, 255, 255);
 uxFill(255,0);
 uxNoStroke();

 image(ratroom,0,0);

 tint(255, al);
 image(lamp, 200, 220, 100, 120);
 tint(255, alb);
 image(lampb, 200, 220, 100, 120);
 image(shade, shx, shy, 60, 60);
 uxRect(210,220,100,120).uxEvent('click',lampClicked);

 if (mouseX < 100 ) {
   pupilmoveX = -2;
 }
 if (mouseX > 100 && mouseX < 170){
   pupilmoveX = 0;
 }
 if (mouseX > 170){
   pupilmoveX = 2;
 }
 if (mouseY < 280){
   pupilmoveY = -2;
 }
 if (mouseY > 280 && mouseY < 300){
   pupilmoveY = 0;
 }
 if (mouseY > 300){
   pupilmoveY = 2;
 }
 tint(255, ass);
 image(snuffy,100,280,150,150);
 tint(255,aw);
 image(snuffyw, 100,280,150,150);
 image(pupils, (100 + pupilmoveX), (280 + pupilmoveY),150,150);
 uxRect(100,280,150,150).uxEvent('click',snuffyClicked);
 
 tint (255, as);
 image(shard, s1x, s1y, 20, 20);
 image(shard, s2x, s2y, 20, 20);

 tint(255, av);
 image(vase, 350, 250, 100, 120);
 tint(255,avb);
 image (vaseb, 350, 250, 100, 120);
 image(rose, rx, ry, 100,50);
 uxRect(355,250,100,120).uxEvent('click',vaseClicked);

 tint(255, ap);
 image(puff1, p1x, p1y);
 image(puff2, p2x, p2y);

 tint(255,api);
 image(pillow, 620, 300, 120, 120);
 tint(255, apb);
 image(pillowb, 620,300, 120, 120);
 uxRect(625,300,120,120).uxEvent('click',pillowClicked);

 tint(255,ab1);
 image(burg1, 800, 240, 120, 120);
 tint(255, ab2);
 image(burg2, 800, 240, 120, 120);
 tint(255, ab3);
 image(burg3, 800, 240, 120, 120);
 tint(255, ab4);
 image(burg4, 800, 240, 120, 120);
 tint(255, ab5);
 image(burg5, 800, 240, 120, 120);
 tint(255, ab6);
 image(burg6, 800, 240, 120, 120);
 tint(255, ab7);
 image(burg7, 800, 240, 120, 120);
 tint(255, ab8);
 image(burg8, 800, 240, 120, 120);
 tint(255, ab9);
 image(burg9, 800, 240, 120, 120);
 uxRect(bx1, 240, 100, 80).uxEvent('click',burgerClicked1);
 uxRect(bx2, 240, 100, 80).uxEvent('click',burgerClicked2);
 uxRect(bx3, 240, 100, 80).uxEvent('click',burgerClicked3);
 uxRect(bx4, 240, 100, 80).uxEvent('click',burgerClicked4);
 uxRect(bx5, 240, 100, 80).uxEvent('click',burgerClicked5);
 uxRect(bx6, 240, 100, 80).uxEvent('click',burgerClicked6);
 uxRect(bx7, 240, 100, 80).uxEvent('click',burgerClicked7);
 uxRect(bx8, 240, 100, 80).uxEvent('click',burgerClicked8);

 tint(255, abl);
 image(blankie, 500, 530, 120, 120);
 
 uxRect(500, 560, 120, 70).uxEvent('click',blankieClicked);

 tint(255, ac);
 image(computer, 950, 125, 180, 180);
 tint(255, aco);
 image(computeroff, 950, 125, 180, 180);
 uxRect(950, 125, 180, 170).uxEvent('click',computerClicked);;
 
 tint(255);
 image(rat, (mouseX-2), (mouseY-20));
tint(255, ablr);
 image(blankierat, mouseX-50, mouseY-50, 150, 120);
  button = createButton('reset');
  button.position(80, 495);
  button.mousePressed(reset);
  tint(255);

  if (s1x < 0 || s1x > width) {
    xSpeed *= -1;
  }
  if (s1y < 459  || s1y > height) {
    ySpeed *= -1;
  }

  if (s2x < 0 || s2x > width) {
    xSpeed2 *= -1;
  }
  if (s2y < 459  || s2y > height) {
    ySpeed2 *= -1;
  }

  s1x += xSpeed;
  s1y += ySpeed;

  s2x += xSpeed2;
  s2y += ySpeed2;

}

function snuffyClicked(){
  aw = 255;
  ass = 0;
}
function lampClicked(){
  alb = 255;
  als = 255;
  al = 0;
  shx = 200;
  shy = 460;
}
function vaseClicked(){
  avb = 255;
  ar = 255;
  as = 255;
  av = 0;
  s1x = 400;
  s2x = 400;
  s1y = 460;
  s2y = 460;
  rx = 410;
  ry = 460;


}
function pillowClicked(){
  apb = 255;
  ap = 255;
  api = 0;
  p1x = 630;
  p2x = 630;
  p1y = 460;
  p2y = 460;
}
function burgerClicked1(){
  if(ab1=255){
    ab1=0;
    ab2= 255;
    bx2= 800;
    bx1 = 1200;
  }
}
function burgerClicked2(){
  if(ab2=255){
    ab2=0;
    ab3= 255;
    bx3= 800;
    bx2 = 1200;
  }
}
function burgerClicked3(){
  if(ab3=255){
    ab3=0;
    ab4= 255;
    bx4= 800;
    bx3 = 1200;
  }
}
function burgerClicked4(){
  if(ab4=255){
    ab4=0;
    ab5= 255;
    bx5= 800;
    bx4 = 1200;
  }
}
function burgerClicked5(){
  if(ab5=255){
    ab5=0;
    ab6= 255;
    bx6= 800;
    bx5 = 1200;
  }
}
function burgerClicked6(){
  if(ab6=255){
    ab6=0;
    ab7= 255;
    bx7= 800;
    bx6 = 1200;
  }
}
function burgerClicked7(){
  if(ab7=255){
    ab7=0;
    ab8= 255;
    bx8= 800;
    bx7 = 1200;
  }
}
function burgerClicked8(){
  if(ab8=255){
    ab8=0;
    ab9= 255;
    bx8 = 1200;
  }
}

function blankieClicked(){
  abl= 0;
  ablr = 255;
}
function computerClicked(){
  ac= 0;
  aco = 255;
}
function dropBlanket(){

}