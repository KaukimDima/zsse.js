class Animal {
    constructor(name,height,color) {
        this.name=name,
        this.height=height,
        this.color=color
    }
    canfly(){
        return true;
    }

    getname(name){
        console.log(this.name);
    }
}

class Penguin extends Animal{
         super(Penguin,2,black);
         constructor (weight) {
        this.weight=weight;
         }
         
     
     color (color) {
         console.log('Penguins are'+ color) ;
     }
     fly() {
         return false;
     }
}

class Seagull extends Animal{
    super(Seagull, 2 , white);
    color (color) {
        console.log('Seagulls are'+ color);
    }
    fly() {
        return true;
    }
}

const s=new Animal(giraffe,3,yellow);