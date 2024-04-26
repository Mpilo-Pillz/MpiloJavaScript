class Recatable {
  width;
  length;

  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  calulateArea() {
    return this.length * this.width;
  }
}

class Square extends Recatable {
  width;
  length;

  constructor(length, width) {
    super(length, width);
    this.length = length;
    // this.width = length
  }

  override calulateArea() {
    return this.length * this.length;
  }
}

// class Square {
//     width;
//     length;

//     constructor(length) {
//         this.length = length
//         // this.width = length
//     }

//     calulateArea() {
//         return this.length * this.length;
//     }
// }

const square = new Square(2, 3);
const recatable = new Recatable(2, 3);

const otherSquare = new Square(2, 3);
const otherOtherSquare = new Recatable(2, 3);

console.log(square.calulateArea());
console.log(recatable.calulateArea());

class Shape {
  volume;
  area;
}

class Circle extends Shape {
  radius;
  cicumferacne;
}

interface Duck {
  fly();
  quack();
  swim();
}

interface FlyBehaviour {
  fly();
}
interface QuackBehaviour {
  quack();
}
interface SwimBehaviour {
  swim();
}

class Mallard implements FlyBehaviour, QuackBehaviour, SwimBehaviour {
  fly() {
    throw new Error("Method not implemented.");
  }
  quack() {
    throw new Error("Method not implemented.");
  }
  swim() {
    throw new Error("Method not implemented.");
  }
}

class Rubber implements SwimBehaviour, QuackBehaviour {
  quack() {
    throw new Error("Method not implemented.");
  }
  swim() {
    throw new Error("Method not implemented.");
  }
}

class Screen {
  button: Button;
  textBox: TextBox;
  display() {}

  constructor(textbox: TextBox, button: Button) {
    this.button = button;
    this.textBox = TextBox;
  }
}

interface Button {}

interface TextBox {}

const button = new Button();
const textBox = new TextBox();

class PasswordTextbox implements TextBox {}

class closeButton implements Button {}

class SubmitButton implements Button {}

const screen = new Screen(textBox, button);
