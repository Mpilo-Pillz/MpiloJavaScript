// const numbers = [1,2,3,4,5];

// function addNumbers(numbers) {
//     return numbers.reduce((sum, number) => {
//         console.log('sum-->', sum);
//         console.log('number-->', number);
        
//         return sum + number;
//     }, 0)
// }

// console.log(addNumbers(numbers));
// console.log(addNumbers([1,2,3,4,5]));

// ////////////Rest//////////

// let rest = numbers; ///// this has no value just to remnd me that this is rest
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        console.log('sum-->', sum);
        console.log('number-->', number);
        
        return sum + number;
    }, 0)
}

console.log(addNumbers(1,2,3,4,5));

///////////////// SPREAD ///////////////

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const webColors = ["smoke white", "salom", "terqois"]

console.log(defaultColors.concat(userFavoriteColors));
console.log(['blue',...defaultColors, ...userFavoriteColors, ...webColors]); // taking all the values form defaultCOlrs and userFav and adding them to a new array


///////Using rest and spread, shopping list to alwasy include milk even if milk is not there //////
function validateShoppingList(...items) {
    if (items.indexOf('milk') < 0) {
        return ['milk', ...items];
    }

    return items;
}

console.log(validateShoppingList('watermelon', 'pomergranate', 'passion fruit'));


///////////// Library example ///////
/// version 1

// const MathLibrary = {
//     calculateProduct(a, b) {
//         return a * b;
//     },

//     ///version 2 we change the name of the method
//     multiply(a,b) {
//         return a * b;
//     }
// };

//correct way to fix

const MathLibrary = {
    calculateProduct(...rest) {
        console.log('Please use the multiply method instead');
        
        return this.multiply(...rest)
    },
    multiply(a, b) {
        return a * b;
    }
}


