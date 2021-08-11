function callTwice(func) {
  func();
  func();
}

function laugh() {
  console.log("hahahahahahaha");
}

function giggle() {
  console.log("hehe");
}

callTwice(laugh);

function repeatNTimes(action, num) {
  for (let i = 0; i < num; i++) {
    action();
  }
}

repeatNTimes(giggle, 10);

function funny(func1, func2) {
  let rand = Math.random();
  console.log(rand);
  rand > 0.5 ? func1() : func2();
}

funny(giggle, laugh);
