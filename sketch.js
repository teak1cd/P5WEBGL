var level;
var objects = [];
var a = 0;
var imag = [];
var rotation;
var mousePX;
var mousePY;
var mp;
var sceneData;
function setup() {
  createCanvas(720, 720, WEBGL);
  mousePY = mouseY;
  mousePX = mouseX;
  level = new level();
  rotation = {"x":0,"y":0,"z":0}
  sceneData = level.getData("level0.json");
  objects = sceneData[0];
  imag.push(loadImage("tex.png"));
}
function draw() {
  if(mouseIsPressed){
    mouseX = mouseX/50;
    mouseY = mouseY/50;
    rotation.z+=mouseX-mousePX;
    rotation.x-=mouseY-mousePY;
    mousePX = mouseX;
    mousePY = mouseY;
  }else{
    rotation.z+=0.01;
  }
  background(0);
  rotateX(rotation.x);
  rotateY(rotation.y);
  rotateZ(rotation.z);
  for(var i = 0;i<objects.length;i++){
      texture(imag[objects[i].texture])
      objects[i].show();
  }
}


/*

{
 "objects":[
  {
   "type":"box",
   "size":{},
   "pos":{}
  }
 ]
}


*/
