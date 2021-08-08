const myObj = {
    firstName: 'Heleb',
    lastName: 'mub'
}

const myArr = ['el1', 'el2', 'el3', 'el4', 'el5'];

for (const elem of myArr) {
    console.log(`${elem}`);
}
for (const [elem, ent, s] of myArr) {
    console.log(`${elem}:${ent}:${s}`);
}
// console.log(Object.entries(myObj));

// for (const skiya of Object.entries(myObj)) {
//     console.log(`${skiya}`);
// }
// for (const [key, value] of Object.entries(myObj)) {
//     console.log(`${key}: ${value}`);
// }