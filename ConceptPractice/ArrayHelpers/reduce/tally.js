const votes = ['y', 'n', 'n', 'y', 'y', 'n', 'n', 'y', 'y', 'n', 'n', 'y', 'y', 'n', 'n', 'y'];


const results = votes.reduce((tally, currentVote) => {
    tally[currentVote] = (tally[currentVote] || 0) + 1
    return tally
}, {})


console.log(results);

// tally[val] = (undefined || 0) + 1 becomes 1
// tally[val] = (1 || 0) + 1 becomes 2
// tally[val] = (2 || 0) + 1 becomes 3

// const results = votes.reduce((tally, currentVote) => {
//     if (tally[currentVote]) {
//         tally[currentVote]++
//     } else {
//         tally[currentVote] = 1;
//     }
//     return tally
// }, {})