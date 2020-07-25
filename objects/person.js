let person = {
    name: 'Nikita',
    birthyear: 1991,
    location: 'Johannesburg'
}

let otherPerson = {
    name: 'Fikasentani',
    birthyear: 2019,
    location: 'Gauteng'
}

let getPersonSummary = function (human) {
    return {
        summary: `${human.name} was lives in ${human.location}`,
        about: `${human.name} was born in ${human.birthyear} and is turning ${2020 - human.birthyear} years old`
    }
}

// console.log(`${person.name} is ${2019 - person.birthyear} and lives in ${person.location}`);

personSummary = getPersonSummary(person);
otherPersonSummary = getPersonSummary(otherPerson);

console.log(personSummary.summary, personSummary.about);
console.log(`${otherPersonSummary.summary}, ${otherPersonSummary.about}`);
