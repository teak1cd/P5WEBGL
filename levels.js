function getLevels(n){
  switch(n){
    case 0:
      return {
    "textures": ["tex.png","drywall (3).png"],
    "objects": [{
        "type": "Box",
        "inputs": [0, 0, 0, 100, 100, 100, 0]
    }, {
        "type": "Box",
        "inputs": [0, 800, 0, 100, 100, 100, 1]
    }, {
        "type": "Box",
        "inputs": [0, 500, 0, 50, 50, 50, 1]
    }, {
        "type": "Box",
        "inputs": [200, 500, 0, 50, 50, 50, 0]
    }, {
        "type": "Box",
        "inputs": [-200, 500, 0, 50, 50, 50, 1]
    }]};
    break;
  }
}
