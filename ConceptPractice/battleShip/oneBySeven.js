// let randomLoc = Math.floor(Math.random() * 5); //0-6
// let location1 = randomLoc; // position 4
// let location2 = location1 + 1; // position 5
// let location3 = location2 + 1; //position 6

// let misses = 0;
// let hits = 0;
// let guesses = 0;
// let isSunk = false;

// while(isSunk === false) {
//     guess = prompt("Ready, aim, fire! (enter a number from 0 - 6)");
    
//     if(guess < 0 || guess > 6) {
//         alert("Please enter a valid cell numer!");
//     } else {
//         guesses++;
//         if (guess == location1 || guess == location2 || guess == location3) {
//             alert("HIT!");
//                 hits++;
//                 if (hits == 3) {
//                     isSunk = true;
//                     alert('YOu sunk all the ships');
//                 } else {
//                     alert('MISS')
//                 }
//         }
//     }
// }

// alert(`You took ${guesses} to sink the battle ships. YOur shooting accuracy is ${3/guesses}`)



let kvArray = [{key: 1, value: 10}, 
    {key: 2, value: 20}, 
    {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
let rObj = {}
rObj[obj.key] = obj.value
return rObj
})

console.log(reformattedArray);
