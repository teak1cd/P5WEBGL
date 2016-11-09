
var objects = [];
var a = 0;
var imag = [];
function setup() {
  createCanvas(720, 720, WEBGL);
    objects.push(new Box(0,0,0,16,0));
  // An array of Box objects\
  imag.push(loadImage("assets/dirt.png"));
  // Star with one
}

function mousePressed() {

}

function draw() {
  background(51);
  rotateX(a);
  rotateY(a * 0.4);
  rotateZ(a * 0.1);
  for(var i = 0;i<objects.length;i++){
      texture(imag[objects[i].texture])
      objects[i].show();
  }
  a+=0.01;
}
