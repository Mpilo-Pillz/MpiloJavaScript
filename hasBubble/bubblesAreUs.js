var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var containsHighestScores = []
var bestScores = []
var highestScore = 0;
var total = scores.length

for (var i = 0; i < total; i++) {
    // console.log(scores[i]);

    console.log(`solution at index ${i} containes #${scores[i]}`);
    

    if (highestScore < scores[i]) {
        highestScore = scores[i];

        
    }
  
    
        // if(scores[i] === highestScore) {
        //     containsHighestScores.push(highestScore);
        //     containsHighestScores.push(scores.indexOf(highestScore))
        // }

    
}

for(var i = 0; i < total; i++) {
    if(scores[i] === highestScore) {
        containsHighestScores.push(i)
        // bestScores.push(highestScore)
            bestScores[i] = scores[i]
    }
}

function removeUndefined(arrays) {
   return arrays.find(arr => {
        return arr !== undefined
    })
} 

console.log(`Total Bubble Tests done is: ${total}`);
console.log(`The highest Bubble score is: ${highestScore}`);
console.log(`Solutions with the higest score: ${bestScores}`);
console.log(`Indexes with the higest score: ${containsHighestScores}`);
console.log(`Without undefined: ${removeUndefined(bestScores)}`);



