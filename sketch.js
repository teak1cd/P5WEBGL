var level;
var objects = [];
var a = 0;
var imag = [];
var rotation;
var mousePX;
var mousePY;
var mp;
var sceneData;
var engine = {};
var useExternalLevel = false;
var externalData = null;
var run = 0;
function setup() {
  if(run === 0)createCanvas(innerWidth, innerHeight, WEBGL);
  run = 1;
  mousePY = mouseY;
  mousePX = mouseX;
  level = new level();
  rotation = {"x":2.4,"y":0,"z":0}
  if(!useExternalLevel){
     sceneData = level.getData(getLevels(0));
  }else{
    sceneData = level.getData(externalData);
  }
  engine.objects = sceneData[0];
  img = sceneData[1];
  for(var i = 0;i<img.length;i++){
    imag.push(loadImage(img[i]));
  }
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
    //rotation.z+=0.01;
    //rotation.x+=0.001*PI
  }
  //engine.objects[hello_world].pos.x+=sin(frameCount/18)*4;
  //engine.objects[hello_world2].pos.x-=sin(frameCount/18)*4;
  background(0);
 
  rotateX(rotation.x);
  rotateY(rotation.y);
  rotateZ(rotation.z);
  for(var i = 0;i<engine.objects.length;i++){
     try{
       if(typeof engine.objects[i].useTexture !== "undefined" && engine.objects[i].useTexture) texture(imag[engine.objects[i].texture]);
       engine.objects[i].show();
     }catch(e){
      console.log(e);
     }
  }
}
