let programmingLanguages = ["JavaScript", "TypeScript", "Dart", "Python", "Java"];
let myNumbers = [18, 20, 10, 5, 100]; //does not sort by number, first converts to string and cmpares character codes meaning it sorts them by the first character

// console.log(programmingLanguages.sort());
// console.log(myNumbers.sort());


// to sort you need to create compare function
/*
    * if compareFunc(a,b) returns less than 0 (a negative number)
        * Sort a before b
    * if compareFunc(a,b) returns 0
        * Leave a and b unchanged with respect to each other
    * If compareFunc(a, b) return greater than 0
        * Sort b before a       
*/

/*
* sort mutates tha array so we have to create a copy of the array with slice else the forst sort will be overwritten and we will end up with desc and asc having the same array values
* in other words the first sorted array will be overby the second becuase the original array os the one that s mutated and all three variabales are pointing to the same mutated array
* 
*/

const ascendingOrder = myNumbers.slice().sort((a, b) => a - b)
const descendingOrder = myNumbers.slice().sort((a, b) => b - a)
console.log(ascendingOrder);
console.log(descendingOrder);