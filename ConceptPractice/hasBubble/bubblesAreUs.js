var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
var costs = [.25, .27, .25, .25, .25, .25,.33, .31, .25, .29, .27, .22,.31, .25, .25, .33, .21, .25,.25, .25, .28, .25, .24, .22,.20, .25, .30, .25, .24, .25,.25, .25, .27, .25, .26, .29];
var containsHighestScores = []
var bestScores = []
var highestScore = 0;
var total = scores.length

var NoPushBestScores = [];
var NoPushcontainsHighestScores = [];

function printAndGetHighScores(scoreArray) {
    scoreArray.forEach((score, index) => {
    console.log(`bubble at index ${index} has a score of ${score}`);
    if(score > highestScore) {
        highestScore = score;
    }
});
}

printAndGetHighScores(scores)

function createNewArraysWithHighScoreAndIndexes(scoreArray, bestScoresArray, containsHighestScoresArray) {
  return scoreArray.map((score, index) => {
    if (score === highestScore) { //consider passing highscore as an argument
        bestScoresArray.push(score);
        containsHighestScoresArray.push(index);
        // return bestScores;
    }
})
}

createNewArraysWithHighScoreAndIndexes(scores, bestScores, containsHighestScores)

for (var i = 0; i < scores.length; i++) {
    if (scores[i] === highestScore) {
        NoPushBestScores[i] = i
    }
}

function removeUndefined(array) {
   return array.filter(noscore => {
        return noscore !== undefined;
    })
}

console.log('We got the Juice -->',removeUndefined(NoPushBestScores));



console.log('The solutions tested are ',scores);

console.log(`Total Bubble Tests done is: ${total}`);
console.log(`The highest Bubble score is: ${highestScore}`);
console.log(`Solutions with the higest score: ${bestScores}`);
console.log(`Indexes with the higest score: ${containsHighestScores}`);
console.log('Without undefined: ', NoPushBestScores);
//TODO passPRintAndGetHighScore as an argument forcreateNewArraysWithHighScoreAndIndexes


function getMostCostEffectiveSolution(score, costs, highScore) {
    console.log('score--->', score);
    console.log('costs--->', costs);
    console.log('highscore--->', highScore);
    
    var cost = 100
    var index;

    for(var i = 0; i < scores.length; i++) {
        if (score[i] === highScore) {
            if ( cost > costs[i]) {
                index = i;
                cost = costs[i]
            }
        }
    }
    return index;
}

console.log('whaa-->',getMostCostEffectiveSolution(scores, costs, highestScore));


var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highestScore)
console.log(`Bubble solution #${mostCostEffective} is the most cost effective`);



