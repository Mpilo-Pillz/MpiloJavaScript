const myList = ["LErn React", "LEarn Docker", "Learn TypeScript"];
const myNumbers = [1, 2, 3, 4, 5];
let doubledNums = [];
const myLoopObject = { task: "Master J/TS", status: "Inprogress" };
const dictionary = {
    esSix: "JavaScript2015",
    typeScript: "JavaScript2015OnSteriods",
};

for (let i = 0; i < myList.length; i++) {
    console.log("-->", myList[i]);
}

for (whatever in dictionary) {
    console.log("-->", whatever);
}

for (item in myLoopObject) {
    console.log(`loopObject--> ${item} name is ${myLoopObject[item]}. yep ${myLoopObject.item}`);
}

for (task of myList) {
    console.log("-->", task);
}

myList.forEach(function (task) {
    console.log("-->", task);
});

myList.forEach((task) => {
    console.log("-->", task);
});

console.log(doubledNums);
myNumbers.forEach((myNumber) => {
    doubledNums.push(myNumber * 2);
});
console.log(doubledNums);

console.log(doubledNums);
doubledNums = myNumbers.map((myNumber) => myNumber * 2);
console.log(doubledNums);
