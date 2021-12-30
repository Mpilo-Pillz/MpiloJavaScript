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
    let guess = prompt('Guess a letter in the word: ').toLowerCase();
    console.clear();

    if (obsurialArray.indexOf(guess) > -1) {
        console.log(`YOU GUESSED ${guess} already! No lives lost`);
    }
    for (let i = 0; i < wordAnswer.length; i++) {
        if (guess === wordAnswer[i]) {
            obsurialArray[i] = guess
            console.log("CORRECT!\n", stages[livesLeft]);
        }
    }
    if (wordAnswer.indexOf(guess) === -1) {
        livesLeft--;
        console.log("WRONG!\n", stages[livesLeft]);
    }

    console.log(obsurialArray)

    // if (obsurialArray.join('') === wordAnswer) {
    //     isGameOn = false;
    //     console.log(`CONGRATULATIONS, YOU WIN!\n You guessed the word correctly. The word was ${obsurialArray.join('')}`)
    // }

    if (obsurialArray.indexOf('_') === -1) {
        isGameOn = false;
        console.log(`CONGRATULATIONS, YOU WIN!\n You guessed the word correctly. The word was ${obsurialArray.join('')}`)
    }

    if (livesLeft === 0) {
        console.log(`GAME OVER, YOU LOOSE!.\n The word was ${wordAnswer}`);
        isGameOn = false;
    }

}