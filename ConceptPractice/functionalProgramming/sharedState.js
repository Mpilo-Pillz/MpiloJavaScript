const x = {
    val: 2
};

const x1 = () => x.val += 1;
const x2 = () => x.val *= 2;

x1()
x2()

console.log(` the value of x is ${x.val}`);

// the below will prodice a different value

const y = {
    val: 2
}

const y1 = () => y.val += 1;
const y2 = () => y.val *= 2;

y2();
y1();

console.log(` the value of xy is ${y.val} and that is a problem leading to unexpected side effects`);