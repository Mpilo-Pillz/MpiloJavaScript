// connect to html file
function greet() {
  return "A String";
}

async function asyncGreet(word) {
  return word;
}

console.log(greet());
console.log(asyncGreet("Returns a promise that resolves with a string"));
asyncGreet("resovling the promise string").then((data) => console.log(data));

async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "X and Y must be numbers!";
  }
  return x + y;
}
function notAsyncAdd(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "X and Y must be numbers!";
  }
  return x + y;
}

add("e", "r");
add(10, 90);

add("c", "y")
  .then((val) => console.log("Promise resolved with: ", val))
  .catch((err) => console.log("PRomise REjected with: ", val));
add(30, 70)
  .then((val) => console.log("Promise resolved with: ", val))
  .catch((err) => console.log("PRomise REjected with: ", val));

notAsyncAdd(20, 80);
notAsyncAdd("m", "a");
