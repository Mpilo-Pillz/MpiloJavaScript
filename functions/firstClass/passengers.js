const passengers = [ 
    {name: 'Bandile Bandz', paid: false, ticket: 'Economy Class'},
    {name: 'Sandile Sandz', paid: false, ticket: 'Economy Class'},
    {name: 'Siseko Steko', paid: false, ticket: 'Economy Class'},
    {name: 'Mpilo Pillz', paid: true, ticket: 'Economy Class'},
    {name: 'Kgalalelo Dopey', paid: true, ticket: 'Business Class'},
    {name: 'Janine Buddy', paid: true, ticket: 'First Class'},
    {name: 'Hunadi Boss', paid: true, ticket: 'First Class'},
    {name: 'Kopano Daisy', paid: true, ticket: 'Business Class'},
    {name: 'Phumlile Make', paid: false, ticket: 'Premium Class'},
];

//first we create a function that knows how to iterate thought he passenger list.
//in the func above, pass a function that does the check

function mycheckNoFlyList(passengers) {
    passengers.forEach(passenger => {
        if (passenger.name === 'Kgalalelo Dopey') {
            return false;
        }
    })
    return true;
}

function mycheckNotPaid(passengers) {
    passengers.forEach(passenger => {
        if (!passenger.paid) {
            console.log(passenger);
            return false;
        }
    })
    return true;
}

function processPassengers(passengers, testFunction) {
    passengers.forEach(passenger => {
        if(testFunction(passenger)) {
            console.log(passenger);
            return false;
        }
        return true;
    }
    )

    // for(var i = 0; i < passengers.length; i++) {
    //     if(testFunction(passengers[i])) {
    //                 return false;
    //             }
    // }
    // return true;
}

function checkNoFlyList(passenger) {
    return (passenger.name === 'Kgalalelo Dopey');
}

function checkNotPaid(passenger) {
    return (!passenger.paid);
}

function printPassenger(passenger) {
    let message = passenger.paid ? `${passenger.name} has paid` : `${passenger.name} has not paid`
    return console.log(message);
}

let allCanFly = processPassengers(passengers, checkNoFlyList);
console.log(allCanFly);
if (!allCanFly) {
    console.log('Then plance cant fly, we have somoeone on the no fly list');
}

let allPaid = processPassengers(passengers, checkNotPaid);
console.log(allPaid);
if (!allPaid) {
    console.log("The plane cant fly not everyone has paid.");
}

processPassengers(passengers, printPassenger);


function createDrinkOrder(passenger) {
    let orderFunction;

    if (passenger.ticket === "First Class") {
        orderFunction = function() {
            console.log("Would you like a cocktail or wine");
        };
    } else if (passenger.ticket === "Premium Class") {
        orderFunction = function() {
            console.log("Would you like none alcoholic cocktail, Juice or Soda");
        }
    } 
    else {
        orderFunction = function() {
            console.log("Your choice is beer or spirits");
        };
    }
    return orderFunction;
}

function createDinnerOrder(passenger) {
    let orderFunction;

    if (passenger.ticket === "First Class") {
        orderFunction = function() {
            console.log("Would you like a chicken and pasta");
        };
    } else if (passenger.ticket === "Premium Class") {
        orderFunction = function() {
            console.log("Would you like beef and rice");
        }
    } 
    else {
        orderFunction = function() {
            console.log("Would you like pap and fish");
        };
    }
    return orderFunction;
}

function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();
    // time passes
    getDrinkOrderFunction()
}

function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    }
}

servePassengers(passengers);