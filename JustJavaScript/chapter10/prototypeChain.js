let mammal = {
    brainy: true,
    skeleton: true
}

let human = {
    __proto__: mammal,
    teeth: 32,
    fingers: 10
}

let gwen = {
    __proto__: human,
    age: 19,
    teeth: 31
}

console.log(gwen.brainy); // true

console.log(human.teeth); // 32
console.log(gwen.teeth); // 31
console.log("skeleton->", gwen.skeleton)

console.log(human.hasOwnProperty('teeth')) // true
console.log(gwen.hasOwnProperty('teeth')) // true
console.log(gwen.hasOwnProperty("skeleton")) // false

console.log(gwen.fingers)
gwen.fingers = 12 // new property nothing to do with the prototype
gwen.toes = 12 // new property nothing to do with the prototype 
console.log("proto fingers", gwen.fingers)
console.log("proto fingers", gwen)

