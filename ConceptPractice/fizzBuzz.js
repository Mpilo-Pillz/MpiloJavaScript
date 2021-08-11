var numbers = [];

//ar number = Math.floor(Math.random() * 6);

for (theNumber = 1; theNumber <= 20; theNumber++){

    if (theNumber % 3 === 0 && theNumber % 5 === 0) {
        numbers.push("Fizz Buzz");
    } else if(theNumber % 5 === 0){
        numbers.push("Buzz");
    } else if (theNumber % 3 === 0){
        numbers.push("Fizz");
    } else {
        numbers.push(theNumber);
    }
}

console.log(numbers);