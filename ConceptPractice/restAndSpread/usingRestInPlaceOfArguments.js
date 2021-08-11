function sum(...nums) {
    //arguments does not work in arrow functions
    //arguments is an array like object but is NOT an array so array helpers do not work on it
    //to turn argument into an array so reduce works we use spread
    // return arguments.reduce((total, currVal) => {
    //     return total + currVal;
    // })
    // const argsArr = [...arguments];
    // return argsArr.reduce((total, currVal) => {
    //     return total + currVal;
    // })

    console.log(nums); //nums is an actual array
    return nums.reduce((total, currVal) => {
        return total + currVal;
    })
}

function fullName(first, last, ...titles) {
    console.log('first', first);
    console.log('last', last);
    console.log('titles', titles);
}

const multiply = (...nums) => (
    nums.reduce((total, currVal) => total * currVal)
)