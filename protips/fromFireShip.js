const mub = { name: "mub", age: "3" }
const heleb = { gama: "heleb", age: "4" }
const mpi = { gama: "mpi", age: "5" }

// computed property names
console.log("%c My debuggers", "color: green; font-weight: bold");
console.log({ mub, heleb })
console.table([mub, heleb, mpi])

// Console time
console.time('looper')

let i = 0;
while (i < 10000000) { i++ }

console.timeEnd('looper')

// Console Trace
const deleteMe = () => console.trace("shows me the places it was called incase I did not mean to call it twice")

deleteMe()
deleteMe()


const horse = {
    age: 10
}
function horseAge(str, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge`This horse is ${horse.age}`
const bio1 = horseAge(`This other horse is`, horse.age)
console.log({ bio2, bio1 });
console.log("--------------------------------------PART 2----------------------------------------------------\n");
console.log("--------------------------------------Array Loopers----------------------------------------------------\n");

const orders = [500, 30, 99, 15, 223];
let total = 0;
const withTax = [];
const highValue = [];

for (i = 0; i < orders.length; i++) {
    // Reduce
    total += orders[i];

    // Map
    withTax.push(orders[i] * 1.1);

    // Filter
    if (orders[i] > 100) {
        highValue.push(orders[i])
    }
}

console.log({ total, withTax, highValue });
console.log("--------------------------------------PART 2----------------------------------------------------\n");
console.log("--------------------------------------Array Loopers helpers----------------------------------------------------\n");

const ordersHelpers = [500, 30, 99, 15, 223];
let totalHelpers = ordersHelpers.reduce((acc, cur) => acc + cur);
const withTaxHelpers = ordersHelpers.map(v => v * 1.1);
const highValueHelpers = ordersHelpers.filter(v => v > 100);

console.log({ totalHelpers, withTaxHelpers, highValueHelpers });

console.log("--------------------------------------PART 3----------------------------------------------------\n");
console.log("--------------------------------------Async----------------------------------------------------\n");

const random = () => {
    return Promise.resolve(Math.random())
}

const sumRandomAsyncNums = () => {
    let first;
    let second;
    let third;

    return random()
        .then(v => {
            first = v;
            return random();
        })
        .then(v => {
            second = v;
            return random()
        })
        .then(v => {
            third = v;
            return `Then the Result is ${first + second + thrid}`
        })

}

const asyncAwaitSumRandomAsyncNums = async () => {
    const fourth = await random();
    const fifth = await random();
    const sixth = await random();

    console.log(`Result ${fourth + fifth + sixth}`);
}