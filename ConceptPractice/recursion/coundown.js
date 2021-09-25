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

// coundownRecursive(10)

// countdown(5)
function recursiveCountdown(n) {
    // first we need to break out of the recursion
    if (n <= 0) {
        console.log("Hooray");
        return;
    }

    console.log(n);
    const deductOneSoNumberDecreases = n - 1;
    recursiveCountdown(deductOneSoNumberDecreases)
}

recursiveCountdown(20)