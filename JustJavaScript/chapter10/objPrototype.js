let obj = {}

console.log(obj.__proto__)

let weirdo = {
    __proto__: null
}

console.log(weirdo.hasOwnProperty);
console.log(weirdo.toString)