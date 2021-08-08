const myObj = {
    firstName: 'Heleb',
    lastName: 'mub'
}

console.log(Object.entries(myObj));

for (const skiya of Object.entries(myObj)) {
    console.log(`${skiya}`);
}
for (const [key, value] of Object.entries(myObj)) {
    console.log(`${key}: ${value}`);
}