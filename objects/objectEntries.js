const myObj = {
    firstName: 'Heleb',
    lastName: 'mub'
}

const myArr = ['el1', 'el2', 'el3', 'el4', 'el5'];

for (const elem of myArr) {
    console.log(`${elem}`);
}

/************/
// **** when destructuring each element gets given a var name eg each letter is an element
// so mpi is m,p,i


for (const [elem, ent, s] of myArr) {
    console.log(`${elem}:${ent}:${s}`);
}
// console.log(Object.entries(myObj));

for (const skiya of Object.entries(myObj)) {
    console.log(`${skiya}`);
}

// here an array of arrays so each element in the arr of arr [[first, mub], [[last, heleb]]]
// is assigned to variable
for (const [key, value] of Object.entries(myObj)) {
    console.log(`${key}: ${value}`);
}