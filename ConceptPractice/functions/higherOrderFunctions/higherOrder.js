// function calculateIn(arr) {
//     let sum = 0;
//     for (number in arr) {
//         sum = sum + number;
//     }

//     return sum;
// }

// console.log(calculateIn([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// document.write(calculateIn([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sum(arr, initialValue) {
    // let sum = 0;
    for (number of arr) {
        initialValue = initialValue + number;
    }

    return initialValue;
}

function multiply(arr, initialValue) {
    let product = initialValue
    for (num of arr) {
        product *= num;
    }
    return product
}

// console.log(calculate([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// document.write(calculate([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

function higherOrderCalculate(operation, initialValue, arr) {
    let result = initialValue;

    result = operation(arr, result);

    return result
}

document.write(higherOrderCalculate(sum, 0, myArr))
console.log(higherOrderCalculate(multiply, 1, myArr))


function calculateAlternative(operation, initialValue, numbers) {
    let total = initialValue;
    for (const number of numbers) {
        total = operation(total, number);
    }
    return total;
}

const add = (n1, n2) => n1 + n2;
const times = (n1, n2) => n1 * n2;
const subtract = (n1, n2) => n1 - n2;

console.log("alter-->", add(10, 20));
console.log("alter-->", add(50, 100));

// source
// https://dmitripavlutin.com/javascript-higher-order-functions/