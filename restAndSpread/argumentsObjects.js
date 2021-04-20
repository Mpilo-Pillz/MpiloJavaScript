function sumAll() {
    let total = 0;
    console.log('arguments are', arguments);
    for (let i = 0; o < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
sumAll(8, 4, 3, 2);
sumAll(2, 3)

function sum() {
    //arguments does not work in arrow functions
    //arguments is an array like object but is NOT an array so array helpers do not work on it
    //to turn argument into an array so reduce works we use spread
    // return arguments.reduce((total, currVal) => {
    //     return total + currVal;
    // })
    const argsArr = [...arguments];
    return argsArr.reduce((total, currVal) => {
        return total + currVal;
    })
}