function capitalizeWord(word) {
    let capFirstLetter = word[0].toUpperCase();
    word = word.slice(1);
    word = `${capFirstLetter}${word}`;
    // console.log(capFirstLetter);
    return word;
  }

  console.log(capitalizeWord('words')); 