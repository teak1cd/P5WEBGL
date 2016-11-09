function getLevels(n){
  switch(n){
    case 0:
      return {
    "textures": ["tex.png","drywall.jpg"],
    "objects": [{
        "type": "Box",
        "inputs": [0, 0, 0, 100, 100, 100, 0]
    }, {
        "type": "Box",
        "inputs": [200,200, 200, 100, 100, 100, 1]
    }]};
    break;
  }
}
