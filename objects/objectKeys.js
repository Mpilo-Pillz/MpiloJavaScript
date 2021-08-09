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
const myItararr = []
for (const [key, value] in Object.keys(myNestedObj)) {
    // console.log('--', key);
    // console.log(myNestedObj[value]);
    // myItararr.push(myNestedObj[value])
}

// console.log(Object.keys(myNestedObj));
// console.log(Object.entries(myNestedObj));
// console.log(myItararr);
// console.log(myNestedObj['person']);

const neArr = Object.keys(myNestedObj).map(key =>
    console.log(myNestedObj[key])
)