const myNestedObj = {
  person: {
    firstName: "Mapee",
    lastName: "Dlamz",
  },
  personsPerson: {
    firstName: "Hoon",
    lastName: "Poolwaters",
  },
};
const myItararr = [];
for (const key in Object.values(myNestedObj)) {
  console.log("--", key);
  console.log("in", myNestedObj[key]);
  // myItararr.push(myNestedObj[value]);
}

for (const key of Object.values(myNestedObj)) {
  console.log("of", key);
  console.log("in", myNestedObj[key]);
  // myItararr.push(myNestedObj[value]);
}

// console.log(Object.keys(myNestedObj));
// console.log(Object.entries(myNestedObj));
console.log("keys->", Object.keys(myNestedObj));
console.log("val->", Object.values(myNestedObj));
// console.log(myItararr);
// console.log(myNestedObj['person']);

const neArr = Object.keys(myNestedObj).map((key) => {
  console.log(key);
  console.log(myNestedObj[key]);
  return myNestedObj[key];
});
console.log(neArr);

// const display = Object.keys(posts).map(key =>
//     <option value={key}>{posts[key]}</option>
//   )

Object.keys(args).forEach((key) => {});
