
var objects = [];
var a = 0;
var imag = [];
var rotation;
var mousePX;
var mousePY;
function setup() {
  createCanvas(720, 720, WEBGL);
  mousePY = mouseY;
  mousePX = mouseX;
  rotation = createVector(0,0,0);
  objects.push(new Box(0,0,0,188,0));
  imag.push(loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQnp1wGl3rL4v2Moil_j16ieA-As7R2Zza5AEsEXb7qmPBHIghQ"));
}

function mousePressed() {
  rotation.x+=mouseX-mousePX;
  rotaiont.z+=mouseY-mousePY;
  mousePX = mouseX;
  mousePY = mouseY;
}

function draw() {
  background(51);
  rotateX(rotation.x);
  rotateY(rotation.y);
  rotateZ(rotation.z);
  for(var i = 0;i<objects.length;i++){
      texture(imag[objects[i].texture])
      objects[i].show();
  }
  a+=0.01;
}
