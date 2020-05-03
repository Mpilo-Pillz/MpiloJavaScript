var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var containsHighestScores = []
var bestScores = []
var highestScore = 0;
var total = scores.length

scores.forEach((score, index) => {
    console.log(`bubble at index ${index} has a score of ${score}`);
    if(score > highestScore) {
        highestScore = score;
    }
    
});

scores.map((score, index) => {
    if (score === highestScore) {
        bestScores.push(score);
        containsHighestScores.push(index);
        // return bestScores;
    }
})

console.log('The solutions tested are',scores);

console.log(`Total Bubble Tests done is: ${total}`);
console.log(`The highest Bubble score is: ${highestScore}`);
console.log(`Solutions with the higest score: ${bestScores}`);
console.log(`Indexes with the higest score: ${containsHighestScores}`);
// console.log(`Without undefined: ${removeUndefined(bestScores)}`);



