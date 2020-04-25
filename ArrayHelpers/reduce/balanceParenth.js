function balancedParens(string) {
    //turn string into array
    return !string.split("").reduce(function(counter, char) {
        if (counter < 0) {
            return counter;
        }
        if (char === "(") {
            return ++counter;
        }
        if (char === ")") {
            return --counter;
        }

        return counter;
    }, 0)
}

console.log(balancedParens("())()(()())()"));

//We add a counter, everytime we see an opening Par we increade the counter by one when we see a closing Parenthesis we decrease counter by one 
// if the number is greater than 0 its unbalanced, if it is less than 0 it is also unballanced
//Adding the exclaimation mark to turn to a boolean