function change(b) {
    return b = 2
}

var a = 1;
console.log(change(a))
change(a)
console.log(a);

function changeObj(d) {
    d.prop1 = function () { };
    d.prop2 = {}
}

var c = {}
c.prop1 = {}
changeObj(c)
console.log(c);