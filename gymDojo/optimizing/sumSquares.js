function sumSquares(num) {
    let sum = 0
    for (let i = 0; i <= num; i++) {
        sum += i * i
    }

    return sum
}

console.log(sumSquares(3));