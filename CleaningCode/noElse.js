function canDrink(person) {
    if (person.age !== null) {
        if (person.age < 18) {
            console.log("Nope");
        } else if (person.age < 21) {
            console.log("Not in the US");
        } else {
            console.log("yes ");
        }
    } else {
        console.log("You are not a person");
    }
}

// remove nesting by using a Guard Clause
// reverse the check

function canDrinkBetter(person) {
    if (person.age === null) return console.log("You are not a person");
    if (person.age < 18) return console.log("Nope");
    if (person.age < 21) return console.log("Not in the US");
    console.log("yes ");
}

function canDrinkResponse(person) {
    if (person.age === null) return "You are not a person";
    if (person.age < 18) return "Nope";
    if (person.age < 21) return "Not in the US";
    return "yes";
}

function canDrinkNestedFunc(person) {
    if (person.age === null) return console.log("you are not a person");

    const result = canDrinkRes(person.age);
    console.log(result);
}

function canDrinkRes(age) {
    if (age < 18) return "Nope";
    if (age < 21) return "Not in the US";
    return "yes";
}

const human = {
    age: 21,
    name: 'Nikita'
}

canDrink(human)
canDrinkBetter(human)
canDrinkNestedFunc(human)
console.log(canDrinkResponse(human));

