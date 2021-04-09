function toAccounting(n) {
    if (n < 0) {
        return '(' + Math.abs(n) + ')'
    } else if (n >= 0) {
        return n
    }
}

function toAccountingClean(n) {
    if (n < 0) {
        return '(' + Math.abs(n) + ')'
    } else {
        return n.toString()
    }
}

console.log(toAccounting(0));
console.log(toAccounting(10));
console.log(toAccounting(-5));
console.log(toAccountingClean(0));
console.log(toAccountingClean(10));
console.log(toAccountingClean(-5));