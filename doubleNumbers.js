const numbers = [1, 2, 3];
const doubledNumbers = [];

function double(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        doubledNumber = numbers[i] * 2;
        doubledNumbers.push(doubledNumber);
        // console.log(doubledNumber);
    }
    return doubledNumbers;
}

console.log(double(numbers));
console.log(doubledNumbers);

double(numbers)


/////////WITH rECURSTION ///

// const numbers = [1, 2, 3];
// const isEmpty = el => el.length === 0;
 
// const double = ([f, ...rest]) => isEmpty(rest) ? [f * 2] : [f * 2, ...double(rest)]; 
// OR:

// const numbers = [1, 2, 3];
// const isEmpty = el => el.length === 0;
 
// function double([first, ...rest]) {
//     return isEmpty(rest) ? [first * 2] : [first * 2, ...double(rest)]; 
// }
