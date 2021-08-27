// by value
let a = 10;
let b = "Hi";
let c = a;

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
c = c + 1;
console.log(`a = ${a}`);
console.log(`c = ${c}`);

// by Ref
let d = [1, 2];
let e = d; // points to the same memory address as d
let f = [1, 2]; // has a separate memory address than d
console.log(`d = ${d}`);
console.log(`e = ${e}`);
console.log(`e == d = ${e == d}`);
console.log(`e === d = ${e === d}`);
console.log(`d === f = ${d === f}`);
console.log(`d == f = ${d == f}`);

d.push(3);
console.log(`d after = ${d}`);
console.log(`e after = ${e}`);

function add(array, element) {
  array.push(element);
}

add(c, 4);
