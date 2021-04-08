const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => {
    return square(a) + square(b) === square(c);
}

isRightTriangle(3, 4, 5);

function add(a, b) {
    return a + b;
}

function squareTotals() {
    return add(1, 2) + add(6, 7);
}