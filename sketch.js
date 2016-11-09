
var objects = [];
var a = 0;
var imag = [];
function setup() {
  createCanvas(720, 720, WEBGL);
    objects.push(new Box(0,0,0,188,0));
  imag.push(loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQQnp1wGl3rL4v2Moil_j16ieA-As7R2Zza5AEsEXb7qmPBHIghQ"));
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
