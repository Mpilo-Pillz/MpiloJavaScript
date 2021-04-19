const votes = ['y', 'n', 'n', 'y', 'y', 'n', 'n', 'y', 'y', 'n', 'n', 'y', 'y', 'n', 'n', 'y'];

const results = votes.reduce((tally, currentVote) => {
    if (tally[currentVote]) {
        tally[currentVote]++
    } else {
        tally[currentVote] = 1;
    }
    return tally
}, {})

console.log(results);