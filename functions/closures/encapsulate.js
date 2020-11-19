function mylist() {
    let totalItems = 0;
    
    function addItem() {
        totalItems++;
        return totalItems;
    }

    function removeItem() {
        totalItems--;
        return totalItems;
    }
    removeItem();
    return addItem;

}

let manupulateList = mylist();
console.log(manupulateList());
console.log(manupulateList());
console.log(manupulateList());

function makeCounter() {
    let count = 0;

    function counter() {
        count++;
        return count;
    }
    return counter;
}

let doCount = makeCounter();
console.log(doCount());
console.log(doCount());
console.log(doCount());

function makePassword(password) {
    return function validatePassword(passwordGuess) {
        return (passwordGuess === password);
    };
}

let checkPassword = makePassword('mpilo');
console.log(checkPassword('pillz'));

function multN(n) {
    return function multiplyBy(number) {
        return number * n;
    };
}

let multiply = multN(4);
console.log(multiply(5));

function modMakeCounter(n) {
    count = n;
    return function incrementBy(increment) {
        return count = count + increment;
    };
}

let customCounter = modMakeCounter(5);
console.log(customCounter(5)); 

function makeObjCounter() {
    var count = 100;
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        }
    };
}

var counter = makeObjCounter();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());

// function handler() {
//     console.log(doneMessage);
// }
// function makeTimer(doneMessage, n) {
//     setTimeout(handler, n);
// }
// makeTimer("biscuits are done!", 5000);

function setTimer(doneMessage, n) {
    setTimeout(function() {
        console.log(doneMessage);
    }, n);
    doneMessage = 'AKHOO';
}
setTimer('Cookies are done!', 1000);

(function(food) {
    if (food === 'cookies') {
        console.log("More please");
    } else if (food === 'cake') {
        console.log('DELICIOUS');
    }
})('cake');
