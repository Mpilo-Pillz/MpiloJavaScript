let dwarves = 7;
let continents = '7';
let worldWonders = 3 + 7



let banana = {}
let cherry = banana
let chocolate = cherry
cherry = {}


console.log("banana, cherry", Object.is(banana, cherry));
console.log("cherry, chololate", Object.is(cherry, chocolate));
console.log("chocolate", "banana", Object.is(chocolate, banana));

console.log("NaN === NaN", NaN === NaN); // false
console.log("-0 === 0", -0 === 0); // true
console.log("0 === -0", -0 === 0); // true

let width = 0 / 0 // NaN

let height = width * 2; // NaN

console.log(width === height); // false
console.log(Object.is(width, height)); // true

function resizeImage(size) {
    size === NaN ?
        console.log("Something is wrong") : console.log("The check will never be true");

    console.log(Number.isNaN(size))
    console.log(Object.is(size, NaN))
    console.log(size !== size)

}

let width0 = 0;
let heigt2 = -width;
console.log(width === height); // true

console.log(Object.is(width, height)) // false

// Loose Equality
console.log([[]] == ''); // true
console.log(true == [1]); // true
console.log(false == [0]); // true
const x = "x"
if (x == null) {
    // is the same as the one below
}

if (x === null || x === undefined) { }


console.log(Object.is(1, '1'))