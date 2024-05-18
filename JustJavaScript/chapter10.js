let pizza = {}
console.log(pizza.taste); // undefined

let human = {
    teeth: 32
}

let gwen = {
    age: 19
}
let stacy = {
    __proto__: human,
    age: 19
}

// prototypes

console.log("gwen teeth", gwen.teeth) // undefined
console.log("stacy teeth", stacy.teeth) // undefined

