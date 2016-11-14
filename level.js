function level(){
  this.getData = function(data){
    var output = [[],[]];
    for(var i = 0;i<data.objects.length;i++){
      if(typeof window[data.objects[i].type] !== "undefined"){
        if(typeof data[i].promote!== "undefined"){
           window[data[i].promote]=output.length;
        }
        output[0].push( new window[data.objects[i].type](data.objects[i].inputs));
      }else{
        console.log("error: "+data.objects[i].type);
      }
    }
    output[1] = data.textures;
    return output;
  }
}
function getObjectFromPromote(ind){
  return objects[0][ind];
}
