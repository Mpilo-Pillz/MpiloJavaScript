const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

isRightTriabgle = (a, b, c) => square(a) + square(b) === square(c)

console.log(square(5));
console.log(isRightTriabgle(5, 4, 3));

