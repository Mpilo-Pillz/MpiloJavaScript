function fun(echo) {
    console.log(echo);
}

fun('hello'); //prints hello

function boo(aFunction) {
    aFunction("boo")
}

boo(fun) //prints boo
console.log(fun); //prints details of the function
fun(boo) // prints details of cuntion
var moreFun = fun;
moreFun("hello again") //prints hello again

function echoMaker() {
    return fun;
}

var bigFun = echoMaker();
bigFun("is there an echo?");