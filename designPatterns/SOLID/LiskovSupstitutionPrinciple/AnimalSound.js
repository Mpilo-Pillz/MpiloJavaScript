// Child classes or subclasses must be substituteable for their parent classes or super classes

class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes sound`);
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} barks`);
    }
}

class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} meows`)
    }
}

function makeAnimalSound(animal) {
    animal.makeSound()
}

const hyena = new Animal('Hyena')
makeAnimalSound(hyena);

const dog = new Dog('Reggie');
makeAnimalSound(dog);

const cat = new Cat('Catrin');
makeAnimalSound(cat);