function bottlesOfBeer(numberOfBottles) {
    for (let i = numberOfBottles; i >= 0; i--) {
        let word = 'bottles';
      
        if (i === 1) {
            word = 'bottle'
            console.log(`${i} ${word} of beer on the wall, ${i} ${word} of beer on the wall, \ntake one down pass it around.\n`);  
        } else if (i === 0 ) {
            console.log(`No more ${word} of beer on the wall, No more bottles of beer :( , go to the store and buy some more please.`);
        } else {
            console.log(`${i} ${word} of beer on the wall, ${i} ${word} of beer on the wall, \ntake one down pass it around.\n`); 
           
            
        }
        
        
    }
}

bottlesOfBeer(100);