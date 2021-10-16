// Primitives

let myName = "Fikasentani";
let secondName = myName; // Fikasentani it copies the value
myName = "Thulani";

console.log("2nd Name", secondName);
console.log("myName", myName);

// Referance Values

const engineer = {
    name: "Mpilo",
    age: '29',
    languages: ['JavaScript', 'TypeScript']
}

const businessMan = {
    name: "Mpilo",
    age: '29',
    languages: ['JavaScript', 'TypeScript']
}

const me = Object.assign({}, businessMan);

console.log(engineer);
console.log("businessMan-->", businessMan);
console.log("me-->", me);
businessMan.languages.push("Dart");
console.log("me2-->", me); // Gotcha, Dart is here cos array is still poining tot he same one as before only object was copied not array.

const secondEngineer = engineer;
console.log(secondEngineer);

engineer.name = 'Pillz';
console.log('mutated-->', secondEngineer);
secondEngineer.name = "Mpilz";

console.log('-->', engineer);
console.log("AfterbusinessMan-->", businessMan);

