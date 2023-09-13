const person = {
    firstName: "Nikita",
    skills: ["Swift UIKit", "React", "NestJS"],
    date: new Date("2019-10-15")
}

const person2 = structuredClone(person);
person2.firstName = 'Karabo';
person2.date = new Date("2013-05-01")
person2.skills = ["Java Android", "Selenium", "Jasmine"]

const person3 = JSON.parse(JSON.stringify(person)) // 
person3.date = new Date("2023-08-01")
console.log(person.name); // Nikita
console.log(person2.name); // Karabo

console.log("Looking at the Object after");
console.log(person);
console.log(person2);
console.log(person3); // date is still person1s unchanged