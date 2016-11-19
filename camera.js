function Camera(px,py,pz,rx,ry,rz,meta){
 "use strict";
 if(!this)return new Camera(px,py,pz,rx,ry,rz,meta);
 this.meta = meta;
 this.setPos(px,py,pz);
 this.setRot(rx,ry,rz);
}
Camera.prototype=Object.assign(Camera.prototype,{
 setPos(x,y,z){
  this.pos=createVector(+x||0,+y||0,+z||0);
 },
 changePos(x,y,z){
  this.pos.x+=+x||0;
  this.pos.y+=+y||0;
  this.pos.z+=+z||0;
 },
 setRot(x,y,z){
  this.rot=createVector(+x||0,+y||0,+z||0);
 },
 changeRot(x,y,z){
  this.rot.x+=+x||0;
  this.rot.y+=+y||0;
  this.rot.z+=+z||0;
 },
 update(){
  var key=String.fromCharCode(keyCode);
  switch(key){
    
  }
 },
 lerp(Pos,Angle,ammount){
  var lt = this;
  var pd = Pos.remove(this.pos);
  var ad = Angle.remove(this.rotation);
  var pf = lt.pos.add(pd.mult(createVector(ammount,ammount,ammount)));
  var af = lt.rotation.add(pd.mult(createVector(ammount,ammount,ammount)));
  return lt;
 }
});
