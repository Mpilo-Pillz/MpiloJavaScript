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

function sumSquaresFromArrayOptimized(nums) {
    const squares = nums.map(num => num * num)
    const sum = squares.reduce((accumilator, currentVal) => accumilator + currentVal, 0)

    return sum
}

console.log(sumSquares(3));
console.log(sumSquaresFromArray([1, 2, 3]));
console.log(sumSquaresFromArrayOptimized([1, 2, 3]));