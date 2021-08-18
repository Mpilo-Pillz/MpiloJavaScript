function hello() {
  return "hello";
}
console.log(hello());

// *** Async version
async function eita() {
  return "Eita";
}
console.log("returns a promise", eita());
eita().then((val) => console.log(val));

async function hi() {
  return (greeting = await Promise.resolve("HI"));
}

hi().then((val) => alert(val));
