const myNestedObj = {
    person: {
        firstName: 'Mapee',
        lastName: 'Dlamz',
    },
    personsPerson: {
        firstName: 'Hoon',
        lastName: 'Poolwaters'
    },
}

for (const human in Object.keys(myNestedObj)) {
    console.log(human);
}

console.log(Object.keys(myNestedObj));
console.log(Object.entries(myNestedObj));