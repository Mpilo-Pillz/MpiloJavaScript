let password = 'myPAsswordIsEasy'

console.log(password.includes('PAssword'));

function checkPassword(password) {
    let isValidPassword = !password.includes('password') && password.length >= 8;
    return isValidPassword;

}

let passwordIsValid = function (password) {
    return password.length > 8 && !password.includes('password');
}

console.log(checkPassword('mypasswordisweak'));
console.log(checkPassword('!short'));
console.log(checkPassword('!thisOne1sh@rD'));

let makeGuess = function (guess) {
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    return guess === randomNum;
}