function countdown(n) {
    for (let i = n; i > 0; i--) {
        console.log(i);
    }
    console.log("hooray");
}

// countdown(5)

function coundownRecursive(n) {
    if (n <= 0) {
        console.log("Horray");
        return
    }
    console.log(n);
    coundownRecursive(n - 1)
}

coundownRecursive(10)