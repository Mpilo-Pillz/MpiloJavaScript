function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.started = false;

    this.start = function() {
        this.started= true;
    }

    this.stop = function() {
        this.started = false;
        console.log(this.make + ' is off');
    }

    this.drive = function() {
        if(!this.started) {
            console.log('turn on the engine first for' +this.make );
        } else {
            console.log( this.model + ' is moving');
        }
    }
}

var ford = new Car("Ford", "Fiesta", "2018");
var mercedes = new Car("Mercedes", "A Class", "2022");
var volvo = new Car("Volvo", "XC40", "2023");

var cars = [ford, mercedes, volvo];

cars.forEach(car => {
    car.drive();
    car.start();
    car.drive();
    car.stop();
});
// ford.drive();
// ford.start();
// ford.drive();
// ford.stop();
// mercedes.stop();
