/* when the below function is executed in the browser th evalue of
this will be th ewindow object and we will find the sayHi function as 
a property in the window object.
this refers to the current execution scope
var get added to the global scope of window but let and const do not
*/
function sayHi() {
    console.log("Hi");
    console.log(this);
}

const greet = function () {
    //this will still refer to the window object
    console.log(this);
}

const person = {
    first: 'Cherilyn',
    last: 'Sarkisian',
    nickname: 'Cher',
    fullName() {
        //this in this case is the object itself
        console.log(this);
        console.log(`${this.first} ${this.last} AKA ${this.nickname}`);
    },
    fullNameDestructure() {
        //this in this case is the object itself
        const { first, last, nickname } = this;
        return `${first} ${last} AKA ${nickname}`;
    },
    printBio() {
        const fullName = this.fullNameDestructure();
        console.log(`${fullName} is a person`);
    }
}