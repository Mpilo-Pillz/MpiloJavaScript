console.log("READING JHS FILE");

const myName = "Thulani";
const surname = "Fikasentani";
const age = 29;
const newAge = age + 1;

console.log(
    "My name is " +
    myName +
    " and my surname is " +
    surname +
    ". I am currently " +
    age +
    " years old/ This year I am turning " +
    newAge +
    " years old."
);

console.log(
    `My name is ${myName} and my surname is ${surname}. I am currently ${age}. years old/ This year I am turning ${age + 1
    } years old`
);

const myTasks = [
    "LEarn React",
    "LEarn Typescript",
    "LEarn Python",
    "LEarn AWS",
];

const myTickets = ["unit Testing", "FrontEnd Dev", "Partner api"];

const modList = [...myTasks, ...myTickets];
let myList = document.createElement("ul");
const main = document.getElementById("main");
main.appendChild(myList);
myTasks.push("LEarn Jest");
const mytodoElement = modList.map((list) => {
    myList.insertAdjacentHTML(
        "afterbegin",
        `<li>${list}</li>`
    );
});