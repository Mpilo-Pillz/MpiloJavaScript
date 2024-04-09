// unintentional missing value
let oilerPlate = undefined;
console.log(oilerPlate); // undefined
console.log(typeof undefined); // undefined
console.log(nonExistant); // ReferenceError: nonExistant is not defined has nothing to do with undefined

// Null is an inential missing value
// Null is an object which is a lie casued by a but as it is primitive
console.log(typeof null); // object

// Numbers
let scale = 0;
let a = 1 / scale; // Infinity
let b = 0 / scale; // NaN
let c = -a; // -Infinity
let d = 1 / c; // -0
