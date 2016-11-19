function BoxU() {
  return new Box(arguments);
}

function Box(inp) {
  this.pos = createVector(inp[0], inp[1], inp[2]);
  this.r = createVector(inp[3],inp[4],inp[5]);
  this.texture = inp[6];
}
Box.prototype=Object.assign(Box.prototype,{
  useTexture:true,
  show(){
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    //fill(255);
    box(this.r.x,this.r.y,this.r.z);
    pop();
    return 0;
  }
});
