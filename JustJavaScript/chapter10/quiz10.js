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

let spider = {
    legs: 8
}

let miles = {
    __proto__: spider
}

miles.legs = 2

console.log(miles.legs); // 2
console.log(spider.legs); // 8

let gwen = {
    __proto__: spider
}
spider.legs = gwen.legs * 2;

console.log(gwen.legs); // 8 // 16 actually
console.log("spider legs", gwen.legs); // 16


// html vs css in terms of loadin
// first time to pint
// memory leaks and performance issues

let goose = { location: 'heaven' }

let cheese = { __proto__: goose }

console.log(cheese === goose); // false
console.log(cheese.location) // heaven
goose.location = 'hell'
console.log(cheese.location) // hell
