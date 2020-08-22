function Duck(type, canFly) {
    this.type = type;
    this.canFly = canFly;
}

var duck = new Duck('bird', true);
console.log(duck);

function dogPerson(obj) {
    if (obj instanceof Dog) {
        console.log('This person loves dogs and they want this animal');
    } else {
        console.log('this is not a dog.');
    }
}

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;

    this.bark = function() {
        if (this.weight > 25) {
            console.log(`${this.name} says Woof!`);
        } else {
            console.log(`${this.name} says yip!`);
        }
    }
}

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);
var donald = new Duck("Donald", false)
var dogs = [fido, fluffy, spot, donald];

dogs.forEach(dog => {
    var size = "small";
    if (dogPerson(dog)) {
        if (dog.weight > 10 ) {
            size = "large";
        }
        dog.bark();
    } else {
        console.log('that object is not of type dog');
    }

 console.log(`Dog: ${dog.name} is a ${size} ${dog.breed}`);   
})