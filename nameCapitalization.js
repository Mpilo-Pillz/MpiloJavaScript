var userName = prompt("What is your name ");
console.log(userName);

var getFirstLetter = userName.slice(0,1);
var capitalizeFirstLetter = getFirstLetter.toUpperCase();
var restOfName = userName.slice(1,userName.length).toLowerCase();
var fixedName = capitalizeFirstLetter + restOfName;
alert("Hello " + fixedName);

