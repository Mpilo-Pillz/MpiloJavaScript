// Does exactly what the spread operator does
const me = {
  nicName: "Pillz",
  profession: "Software Engineer",
};

const businessMe = Object.assign({ companName: "FikasenTech" }, me);
const overallMe = {
  ...businessMe,
  hobbies: ["Cycling", "Swimming", "Dancing", "Functional Strength Training"],
};
console.log(businessMe);
console.log(overallMe);
