// Open Closed Principle states that classes should be closed for modification but open for extension
class Animal {
    constructor(name, speed, speedRate) {
        this.name = name;
        this.speed = speed;
        this.speedRate = speedRate
    }

    getSpeed() {
        return this.speedRate.getSpeed()
    }
}

class SpeedRate {
    getSpeed() { }
}

class CheetahSpeedRate extends SpeedRate {
    getSpeed() {
        return 130
    }
}

class LionSpeedRate extends SpeedRate {
    getSpeed() {
        return 80
    }
}

class ElephantSpeedRate extends SpeedRate {
    getSpeed() {
        return 40
    }
}

// Now we can add a Goat without changing the already tested classes above
class GoatSpeedRate extends SpeedRate {
    getSpeed() {
        return 35
    }
}

const cheetah = new Animal('Cheetah', 4, new CheetahSpeedRate());
console.log(`${cheetah.name} runs up to ${cheetah.getSpeed()} mph`);

const lion = new Animal('Lion', 4, new LionSpeedRate());
console.log(`${lion.name} runs up to ${lion.getSpeed()} mph`);


const elephant = new Animal('Elephant', 4, new ElephantSpeedRate());
console.log(`${cheetah.name} runs up to ${cheetah.getSpeed()} mph`);

// New Speed
const goat = new Animal('Goat', 5, new GoatSpeedRate());
console.log(`${goat.name} runs up to ${goat.getSpeed()} mph`); // Goat runs up to 354 mph