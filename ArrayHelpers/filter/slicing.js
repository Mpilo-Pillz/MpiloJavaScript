const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log('slice-->',animals.slice(3));
// console.log('splice',animals.splice(3));

console.log('slice-->',animals.slice(1, 3));
console.log('splice',animals.splice(3,1 ));
console.log(animals.indexOf('camel'));

