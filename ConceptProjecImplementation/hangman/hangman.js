const stages = require('./hangmanArt');
const prompt = require('prompt-sync')({ sigint: true });
const wordList = require('./hangmanWords')
const wordAnswerPosition = (Math.floor(Math.random() * wordList.length) - 1);
const wordAnswer = wordList[wordAnswerPosition];
const isGameOn = true;
console.log(`psst, the answer is ${wordAnswer}`);
const obsurialArray = wordAnswer.split('').map(letter => '_')
console.log("Please guess a letter in the word\n", obsurialArray);

while (isGameOn) {
    // Get user input
    let guess = prompt('Guess a letter in the word: ');

    for (let i = 0; i < wordAnswer.length; i++) {
        if (guess === wordAnswer[i]) {
            obsurialArray[i] = guess
        }
    }
    console.log(obsurialArray)

}