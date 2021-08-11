var myName = "Mpilo"
var fullName = true; ///change this value to true and execute then see what happens
console.log("My name before the code runs is --->>> " + myName);

if (fullName === false) {
    myName = myName + " Pillz";
    console.log("My full name is now " + myName + " becuase the value of conditional is false");
} else {
    console.log("My name -->> " + myName + " <--- remains as" + myName + "becuase the value of conditional was NOT false");
    
}