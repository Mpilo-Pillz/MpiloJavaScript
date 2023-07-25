function addFromArray(num) {
    if (num > 0) {
        num = num + addFromArray(num - 1)
    }
    return num
}

console.log(addFromArray(5))