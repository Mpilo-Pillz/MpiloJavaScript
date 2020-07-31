const word = ['c','a', 't', 'z', 'i']
const guessedLetters = ['c','a', 't', 'z','n','g', 'a', 'n', 'u']

const finished = word.every((letter) =>  guessedLetters.includes(letter));
console.log(finished);