// watson investigates a suspicious code reported by the police
// however Sherlock ignores the code says it is not worth investigating he found a fatal flaw
// find out why its not worth investigating it, and fix the flaw



// var balance = 10500; // - Balance is a global variable but gets shadowed by its parameter
// var cameraOn = true;

// function suspicious(balance, amount) { // overshadowing the global
//     cameraOn = false;
//     if (amount < balance) {
//         balance = balance - amount; // When you change the balance in the function suspicious the actual balance does not get changed
//     }

//     return amount; //returning the amount stolen but does not impact the balance so its false
//     cameraOn = true; //Camera remains off as this does not run
// }

// var amount = suspicious(balance, 1250); // not using this to update the real balance, so the real balance remains the same
// console.log("uTsetse " + amount + "!"); // gives a false impression that something was taken from the balance but was not

//the right way
var balance = 10500;
var cameraOn = true;

function suspicious(amount) {
    cameraOn = false;
    
    if (amount < balance && cameraOn == false) {
        balance = balance - amount;
        cameraOn = true;
        return amount;
    }
}

var amount = suspicious( 1250);
console.log("uTsetse " + amount + "!");
console.log("Balance is now " + balance);

