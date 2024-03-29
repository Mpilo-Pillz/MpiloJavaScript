function fizzBuzz(num) {
    for (let i = 0; i <= num; i++) {

        const divisibleByFive = i % 5 === 0;
        const divisibleByThree = i % 3 === 0;
        const divisibleByFiveAndThree = divisibleByThree && divisibleByFive;


        // debugger
        if (divisibleByFiveAndThree) {
            console.log("FizzBuzz");
        }
        else if (divisibleByThree) {
            console.log("fizz")
        } else if (divisibleByFive) {
            console.log("Buzz")
        } else {
            console.log(i);
        }
    }


}

// fizzBuzz(100)

function fizzBuzzREcursive(num) {
    const divisibleByFive = num % 5 === 0;
    const divisibleByThree = num % 3 === 0;
    const divisibleByFiveAndThree = divisibleByThree && divisibleByFive;

    if (num <= 0) {
        console.log(num)
        return num
    }

    if (divisibleByFiveAndThree) {
        console.log("FizzBuzz");
    }
    else if (divisibleByThree) {
        console.log("fizz")
    } else if (divisibleByFive) {
        console.log("Buzz")
    } else {
        console.log(num);
    }

    fizzBuzzREcursive(num - 1)
}

// fizzBuzzREcursive(200)

const fizzBuzzRecursiveCountUp = (num, end) => {
    const divisibleByFive = num % 5 === 0;
    const divisibleByThree = num % 3 === 0;
    const divisibleByFiveAndThree = divisibleByThree && divisibleByFive;

    if (num <= 0) {
        console.log("ending on -->", num);
        return
    }




    if (divisibleByFiveAndThree) {
        console.log("Fizzbuzz");
    }
    else if (divisibleByThree) {
        console.log("Fizz");
    }
    else if (divisibleByFive) {
        console.log("Buzz");
    } else {
        console.log(num);
    }

    if (num < end) {
        fizzBuzzRecursiveCountUp(num + 1, end)
    }
}

fizzBuzzRecursiveCountUp(1, 300)