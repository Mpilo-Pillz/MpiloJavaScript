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