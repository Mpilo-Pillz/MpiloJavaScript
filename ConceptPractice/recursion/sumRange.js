function sumRange(n) {
    // debugger
    let total = 0;

    for (let i = n; i > 0; i--) {
        // total += n; // super interesting mistke I made
        total += i;
    }

    return total
}

console.log("sumtange-->", sumRange(3))

function recursiveSumRange(n, total = 0) {
    total += n

    if (n === 0) {
        return total
    }

    return recursiveSumRange(n - 1, total)

}

console.log("recursive-->", recursiveSumRange(4));

function cleanerVersion(n, total = 0) {
    if (n <= 0) {
        return total;
    }

    return cleanerVersion(n - 1, total + n)
}

console.log("otha-->", cleanerVersion(3));