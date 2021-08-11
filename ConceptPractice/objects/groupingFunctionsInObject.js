const arithmetic = {
    add: function (x, y) {
        return x + y
    },
    multiply: function (x, y) {
        return x * y;
    },
    subtract: function (x, y) {
        return x - y;
    },
    divide: function (x, y) {
        return x / y;
    },
    remainder: function (x, y) {
        return x % y
    }
}

const arithmeticModern = {
    add(x, y) {
        return x + y
    },
    multiply(x, y) {
        return x * y;
    },
    subtract(x, y) {
        return x - y;
    },
    divide(x, y) {
        return x / y;
    },
    remainder(x, y) {
        return x % y
    }
}

console.log(arithmeticModern.add(6, 5));
console.log(arithmeticModern.subtract(1, 0));
console.log(arithmeticModern.divide(8, 4));
console.log(arithmeticModern.multiply(2, 3));
console.log(arithmeticModern.remainder(9, 7));

console.log(arithmetic.add(6, 5));
console.log(arithmetic.subtract(1, 0));
console.log(arithmetic.divide(8, 4));
console.log(arithmetic.multiply(2, 3));
console.log(arithmetic.remainder(9, 7));