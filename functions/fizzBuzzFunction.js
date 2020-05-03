function fizzBuzz(number) {
    for (let i = 0; i <= number; i++ ) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i,'--> fizz Buzz');   
        } else if (i % 3 === 0 ) {
            console.log(i,'--> fizz');   
        } else if (i % 5 === 0 ) {
            console.log(i,'--> Buzz');   
        } else {
            console.log(i); 
        }
    }
}

fizzBuzz(30)