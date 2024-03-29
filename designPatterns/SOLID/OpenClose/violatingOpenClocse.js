// This violates opne closed beciase we if we add a goat we add a new statement tot he switch

class Animal {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    getSpeed() {
        switch (this.type) {
            case 'cheetah':
                console.log('Cheetah runs up to 130mph ');
                break;
            case 'lion':
                console.log('Lion runs up to 80mph');
                break;
            case 'elephant':
                console.log('Elephant runs up to 40mph');
                break;
            default:
                throw new Error(`Unsupported animal type: ${this.type}`);
        }
    }
}

const animal1 = new Animal('Lion', 4, 'lion');
animal1.getSpeed(); // Lion runs up to 80mph