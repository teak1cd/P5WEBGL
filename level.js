function level(){
  this.getData = function(path){
    var data = loadJSON(path);
    var output = [[],[]];
    for(var i = 0;i<data.objects.length;i++){
      if(typeof window[data.objects[i].type] !== "undefined"){
        output[0].push( new window[data.objects[i].type](data.objects[i].inputs));
      }
    }
    output[1] = data.textures;
    return output;
  }
}
