
const nums = [65, 47, 83, 29, 10]
console.log(Math.max(65, 47, 83, 29, 10))
console.log(Math.min(65, 47, 83, 29, 10))
console.log(Math.max(nums))
console.log(Math.max(...nums))
console.log(Math.min(nums))
console.log(Math.min(...nums))

const colors = ['red', 'orange', 'yellow', 'green']
function giveMeFour(a, b, c, d) {
    console.log('a-->', a);
    console.log('b-->', b);
    console.log('c-->', c);
    console.log('d-->', d);
}
console.log(giveMeFour(...colors))