const x = {
    val: 2
}

const x1 = x => Object.assign({}, x, { val: x.val + 1})
const x2 = x => Object.assign({}, x, {val: x.val * 2});

console.log('the value of x is ->',x1(x2(x)).val);

//to prove that they are not dependent on each other

const y = {
    val: 2
}

x2(y)
x1(y)

console.log(x1(x2(x)).val);