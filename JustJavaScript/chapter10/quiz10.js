let lie = {
    taste: 'bitter'
}

let cake = {
    __proto__: lie
}

console.log("Quota is lie", cake === lie) //false
console.log("cake taste same as lie taste", cake.taste === lie.taste); // true
console.log("lie own prop", cake.hasOwnProperty('taste')); // false
console.log("lie own prop", lie.hasOwnProperty('taste')); // true
console.log("cake taste same as lie taste", cake.taste === lie.taste); // true
console.log(cake.hasOwnProperty('taste') === lie.hasOwnProperty('taste'));// false

// let otherLie = {
//    taste: 'bitter' 
// }

// let otherCake = {
//     __proto__: lie
// }

lie.taste = "butter"
console.log(cake.taste)


