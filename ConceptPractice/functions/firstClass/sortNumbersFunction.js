var numbersArray = [60, 50, 62, 58, 54, 54];

function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return 1; //place the first item after teh second
    } else if (num1 === num2) {
        return 0; //leave the items in place
    } else {
        return -1; //place the first item before the second item
    }
}

function compareNumbersDesc(num1, num2) {
    return num1 - num2;
    // if (num2 > num1) {
    //     return 1; //place the first item after the second
    // } else if (num1 == num2) {
    //     return 0; // leave them items in place
    // } else {
    //     return -1; //place the first item before the second item
    // }
}

numbersArray.sort(compareNumbers);
numbersArray.sort(compareNumbersDesc);
console.log(numbersArray);