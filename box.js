function Box(x, y, z, sx, sy, sz, img) {
  this.pos = createVector(x, y, z);
  this.r = createVector(sx,sy,sz);
  this.texture = img;
  this.show = function() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    //fill(255);
    box(this.r);
    pop();
    return 0;
  }
}
