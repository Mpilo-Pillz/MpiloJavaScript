function Game() {
    this.level = 0;
}

Game.prototype.play = function() {
    this.level++;
    console.log(`Welcome to level ${this.level}`);
    this.unlock();
}

Game.prototype.unlock = function() {
    if (this.level >= 42 ) {
        Robot.prototype.deployLaser = function() {
            console.log(`${this.name} has  unlocked lazer ability`);
        }
    }
}

function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner
}

Robot.prototype.errorMessage = `${this.name} has an error`;

Robot.prototype.maker = 'Nikita';
Robot.prototype.speak = function() {
    console.log(`${this.name} is online`);
};
Robot.prototype.makeCoffee = function(milk, sugar) {
    milk = milk;
    sugar = sugar;

    if (milk) {
        console.log(`here is your coffe with leitie and ${sugar} spoons of sugar`);
    } else {
        console.log(`here is your Noir sem leite Coffee ${sugar} spoons of sugar`);
    }
}
Robot.prototype.blinkLights = function() {
    console.log(`${this.name} just hit the switch`);
};

Robot.prototype.isWet = function() {
    this.errorMessage = "I am water damaged";
}
    var game = new Game();
var robby = new Robot("Robby", 2013, "Thulani");
var rosie = new Robot("Rosie", 2019, "Fikasentani");

robby.onOffSwitch = '';
robby.makeCoffee = function(milk, sugar) {
    milk = milk;
    sugar = sugar;

    if (milk) {
        console.log(`here is your TEA with leitie and ${sugar} spoons of sugar`);
    } else {
        console.log(`here is your Noir sem leite TEA ${sugar} spoons of sugar`);
    }
};

rosie.cleanHouse = function() {
    console.log(`${this.name} is cleaning the house`);
};

console.log(robby.name + 'was made by ' + robby.maker + " in " + robby.year + " and is owned by " + robby.owner);
robby.makeCoffee(true, 2);
robby.blinkLights();

console.log(`${rosie.name} was made by ${rosie.maker} in ${rosie.year} and is owned by ${rosie.owner}`);
rosie.cleanHouse();

while (game.level < 42) {
    game.play();
}

robby.deployLaser();
rosie.deployLaser();

robby.errorMessage;
rosie.errorMessage;

console.log(robby.hasOwnProperty('errorMessage'));
console.log(rosie.hasOwnProperty('errorMessage'));

console.log(rosie.isWet());
console.log(robby.isWet());



