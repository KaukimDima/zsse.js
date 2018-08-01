class Animal {
  
    constructor(name, height, color) {
      this.name = name ;
      this.height = height ;
      this.color = color;
    }
    
    canFly(){

        return true
    }

    getName(){

        console.log(this.name);
    }
    
    
  }
  
  class Penguin extends Animal {

    constructor(name, height, color, weight) {
    super(name, height, color);
    this.color = "black";
    this.weight = weight;
    }
    

    canFly(){

        return false
    }
  
  }

  class seagull extends Animal {

    constructor(name, height, color, weight) {
    super(name, height, color);
    this.color = "white";
    this.weight = weight;
    }
    
    canFly(){
            return true
        }
    }
  
  
const a = new Penguin("penguin",22,"white", 234);

a.getName();

b = a.canFly();

console.log(b);

console.log(a.color);

console.log(a.weight);




