// This is ultra complicated not for me

const divisors = {
    3: "fizz",
    5: "buzz"
}

for (let num = 0; num <= 100; num++) {
    // console.log('-->', divisors[Object.keys(divisors)[1]]);
    if (!num) {
        console.log(num);
    }

    else if (num % Object.keys(divisors)[0] === 0 && num % Object.keys(divisors)[1] === 0) {
        console.log(divisors[Object.keys(divisors)[0]] + divisors[Object.keys(divisors)[1]]);
        // console.log("fizzbo");
    }
    else if (num % Object.keys(divisors)[0] === 0) {
        console.log(divisors[Object.keys(divisors)[0]]);
    }
    else if (num % Object.keys(divisors)[1] === 0) {
        console.log(divisors[Object.keys(divisors)[1]]);
    } else {
        console.log(num);
    }
}

// for (let divisor of Object.keys(divisors)) {
//     console.log(divisor);
//     for (let i = 1; i < 100; i++) {
//         if
//     }
// }





// let list = [4, 5, 6];

// for (let i in list) {
//     console.log(i); // "0", "1", "2",
// }

// for (let i of list) {
//     console.log(i); // "4", "5", "6"
// }