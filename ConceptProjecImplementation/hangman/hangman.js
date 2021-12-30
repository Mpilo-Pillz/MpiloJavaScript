const stages = require('./hangmanArt');
const prompt = require('prompt-sync')({ sigint: true });
const wordList = require('./hangmanWords')
const wordAnswerPosition = (Math.floor(Math.random() * wordList.length) - 1);
const wordAnswer = wordList[wordAnswerPosition];
let isGameOn = true;
let livesLeft = stages.length - 1
console.log(`psst, the answer is ${wordAnswer}`);
const obsurialArray = wordAnswer.split('').map(letter => '_')
console.log("Please guess a letter in the word\n", obsurialArray);

console.log(stages[livesLeft])
while (isGameOn) {
    // Get user input
    let guess = prompt('Guess a letter in the word: ');

    for (let i = 0; i < wordAnswer.length; i++) {
        if (guess === wordAnswer[i]) {
            obsurialArray[i] = guess
        }
    }
    if (wordAnswer.indexOf(guess) === -1) {
        livesLeft--;
        console.log(stages[livesLeft]);
    }

    console.log(obsurialArray)

    if (obsurialArray.join('') === wordAnswer) {
        isGameOn = false;
        console.log(`CONGRATULATIONS, YOU WIN!\n You guessed the word correctly. The word was ${obsurialArray}`)
    }

    if (livesLeft === 0) {
        console.log(`GAME OVER, YOU LOOSE!.\n The word was ${wordAnswer}`);
        isGameOn = false;
    }


}