function sumSquares(num) {
    let sum = 0
    for (let i = 0; i <= num; i++) {
        sum += i * i
    }

    return sum
}



function sumSquaresFromArray(numbers) {
    let sum = 0;
    numbers.forEach(num => {
        sum += num * num
    });
    return sum
}

console.log(sumSquares(3));
console.log(sumSquaresFromArray([1, 2, 3]));