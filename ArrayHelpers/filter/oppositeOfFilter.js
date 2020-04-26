// var numbers = [10, 20, 30];

// function reject(array) {
//    return array.filter((arr) => {
//         return arr <= 10;
//     })  
// }


// console.log(reject(numbers));



var ladders = [
    {id: 1, height: 20},
    {id: 3, height: 25}
    ];

function findWhere(array, criteria) {
  return array.find((arr) => {
      return criteria.height === arr.height;
  })
}

console.log(findWhere(ladders, {height: 20}));
