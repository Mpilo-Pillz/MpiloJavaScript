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

console.log(arithmetic.add(6, 5));
console.log(arithmetic.subtract(1, 0));
console.log(arithmetic.divide(8, 4));
console.log(arithmetic.multiply(2, 3));
console.log(arithmetic.remainder(9, 7));