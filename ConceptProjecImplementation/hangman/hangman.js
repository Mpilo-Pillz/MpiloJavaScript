const stages = require('./hangmanArt');
const prompt = require('prompt');
const wordList = require('./hangmanWords')
const wordAnswerPosition = (Math.floor(Math.random() * wordList.length) - 1);
const wordAnswer = wordList[wordAnswerPosition];
const isGameOn = true;
console.log(`psst, the answer is ${wordAnswer}`);
const obsurialArray = wordAnswer.split('').map(letter => '_')
console.log("Please guess a letter in the word\n", obsurialArray );

prompt.start();

prompt.get(['userguess'], function (err, result) {
    console.log(result.userguess);
})

while (isGameOn) {
    
}
