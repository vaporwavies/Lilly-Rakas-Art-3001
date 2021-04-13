const objects = [];
let eyeZ;
let img;


function preload(){
  
  img = loadImage('donut.png');
  gif = loadImage('donut.gif');
  dots = loadImage('dots.gif');
  noStroke();

}

function setup() {
  createCanvas(1200, 700, WEBGL);

  eyeZ = height / 2 / tan((30 * PI) / 180); // The default distance the camera is away from the origin.

  objects.push(new IntersectPlane(1, 0, 0, -100, 0, 0)); // Left wall
  objects.push(new IntersectPlane(1, 0, 0, 100, 0, 0)); // Right wall
  objects.push(new IntersectPlane(0, 1, 0, 0, -100, 0)); // Bottom wall
  objects.push(new IntersectPlane(0, 1, 0, 0, 100, 0)); // Top wall
  objects.push(new IntersectPlane(0, 0, 1, 0, 0, 0)); // Back wall

  img = loadImage('donut.png');
  gif = loadImage('donut.gif');
  dots = loadImage('dots.gif');
  noStroke();
  ambientMaterial(250);
}

function draw() {

  background(255); 

  // Lights
  let locX = mouseX +50;
  let locY = mouseY +50;


  ambientLight(100);
  directionalLight(200, 225, 235, 0.25, 0.25, 0);
  directionalLight(255, 255, 255, 0.5, 0.25, 0);
  directionalLight(255, 255, 255, -.5, -0.5, -0.25);
  pointLight(200, 120, 200, locX, locY, 250);


  // Left wall
  texture(dots);

  push();
  translate(-200, 0, 200);
  rotateY((90 * PI) / 180);
  plane(900, 500);
  pop();

  // Right wall
  push();
  translate(200, 0, 200);
  rotateY((90 * PI) / 180);
  plane(900, 500);
  pop();

  // Bottom wall
  push();
  translate(0, 200, 200);
  rotateX((90 * PI) / 180);
  plane(500, 900);
  pop();

  // Top wall
  push();
  translate(0, -200, 200);
  rotateX((90 * PI) / 180);
  plane(500, 900);
  pop();

  texture(gif);
  translate(0,0,-200);
  plane(400, 400); // Back wall

  const x = mouseX - width / 2;
  const y = mouseY - height / 2;

  const Q = createVector(0, 0, eyeZ); // A point on the ray and the default position of the camera.
  const v = createVector(x, y, -eyeZ); // The direction vector of the ray.

  let intersect; // The point of intersection between the ray and a plane.
  let closestLambda = eyeZ * 10; // The draw distance.

  for (let x = 0; x < objects.length; x += 1) {
    let object = objects[x];
    let lambda = object.getLambda(Q, v); // The value of lambda where the ray intersects the object

    if (lambda < closestLambda && lambda > 0) {
      // Find the position of the intersection of the ray and the object.
      intersect = p5.Vector.add(Q, p5.Vector.mult(v, lambda));
      closestLambda = lambda;
    }
  }


  // Cursor
  push();
  translate(0,0,200);
  translate(intersect);
  fill(210, 180, 180);
  rotateY((600-mouseX)/200);
  rotateX((350+mouseY)/200);
  texture(img);
  torus(20);
  pop();
  
}



// Class for a plane that extends to infinity.
class IntersectPlane {
  constructor(n1, n2, n3, p1, p2, p3) {
    this.normal = createVector(n1, n2, n3); // The normal vector of the plane
    this.point = createVector(p1, p2, p3); // A point on the plane
    this.d = this.point.dot(this.normal);
  }

  getLambda(Q, v) {
    return (-this.d - this.normal.dot(Q)) / this.normal.dot(v);
  }
}