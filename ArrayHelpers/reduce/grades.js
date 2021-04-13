[1, 3, 5, 7, 9].reduce((total, currentValue) => {
    return total + currentValue
});

/*
*total starts as the first value in array
* currentValue is the next element in the array
*/

// FIND MAX VALUE IN ARRAY ACCUMILATOR WILL BE TRACKING THE HIGHEST VALUE AND IF IT FINDS A BIGGER VALUE, THEN IT UPDATES THAT VALUE TO THAT VALUE

const grades = [96, 85, 87, 94, 82, 100, 93]

const maxGrade = grades.reduce((max, currentValue) => {
    if (currentValue > max) return currentValue;
    return max;
})

const minGrade = grades.reduce((min, currentValue) => {
    return Math.min(min, currentValue);
})

const maxGradeFancy = grades.reduce((max, currentValue) => {
    return Math.max(max, currentValue);
})

console.log(maxGrade);
console.log(minGrade);
console.log(maxGradeFancy);

// INITIAL VALUE (STARTING VALUE)

[10, 29, 38, 47, 56].reduce((sum, currentValue) => {
    return sum + currentValue;
}, 1000) //if we dont specify the init value then the first item in arr becomes the init value