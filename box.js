function Box(x, y, z, r, img) {
  this.pos = createVector(x, y, z);
  this.r = r;
  this.texture = img;
  this.show = function() {
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    texture(this.img);
    //fill(255);
    box(this.r);
    pop();
    return 0;
  }
}