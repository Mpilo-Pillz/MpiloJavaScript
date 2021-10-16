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
console.log(engineer);

const secondEngineer = engineer;
console.log(secondEngineer);

engineer.name = 'Pillz';
console.log('mutated-->', secondEngineer);

