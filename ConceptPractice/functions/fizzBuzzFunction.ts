function fizzBuzz(number) {
    /**
     * @param {number} number - Any argument of type number
     * Takes in a number
     * If the number is divisible by 3 Fizz if returned.
     * Ii the number is divivible by 5 then Buzz is returned
     * If the number is divisible by 3 and 5 then FizzBuzz is returned
     * Else the number is returned
     */
    for (let i = 0; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i, "--> fizz Buzz");
        } else if (i % 3 === 0) {
            console.log(i, "--> fizz");
        } else if (i % 5 === 0) {
            console.log(i, "--> Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz(30);
