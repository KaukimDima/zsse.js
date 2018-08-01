class Animal {
  constructor(name, height, color) {
    this.name = name;
    this.height = height;
    this.color = color;
  }

  canFly() {
    if (this.name == "Pinguin") return false;
    if (this.name == "Seagull") return true;
  }

  static getName() {
    console.log(this.name);
  }
}

class Pinguin extends Animal {
  constructor() {
    super();
    this.weight = "50";
  }

  color() {
    var color = "black";
    return color;
  }
  fly() {
    return false;
  }
}

class Seagull extends Animal {
  color() {
    var color = "white";
    return color;
  }
  fly() {
    console.log(false);
    return true;
  }
}
