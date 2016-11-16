function LineU(x, y, z, sx, sy, sz, color) {
  this.pos1 = createVector(x,y,z);
  this.pos2 = createVector(sx,sy,sz);
  this.color = color;
  this.show = function() {
    stroke(this.color);
    line(this.pos1.x,this.pos1.y,this.pos1.z,this.pos2.x,this.pos2.y,this.pos2.z);
    return 0;
  }
}

function Line(inp) {
  this.pos1 = createVector(inp[0], inp[1], inp[2]);
  this.pos2 = createVector(inp[3],inp[4],inp[5]);
  this.color = inp[6];
  this.show = function() {
    stroke(this.color);
    line(this.pos1.x,this.pos1.y,this.pos1.z,this.pos2.x,this.pos2.y,this.pos2.z);
    return 0;
  }
}

Line.prototype.useTexture = false;
LineU.prototype.useTexture = false;
