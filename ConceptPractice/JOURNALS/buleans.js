console.log("Old School", Boolean("false"));
console.log("Old School", Boolean("true"));
console.log("New School", !!"false");
console.log("True School", !!"true");
console.log("Truthy", !!"some text");
console.log("Boolean(1)", !!Boolean(1));
console.log("!!2", !!2);
console.log("Falsy", !!0);
console.log("Falsy School", !!undefined);
console.log("Boolean(false)", Boolean(false));
console.log("undefined", Boolean(undefined));
console.log("null", !!null);
console.log("NaN", !!NaN);
console.log("0", Boolean(0));
console.log("empty string", !!"");
console.log("old empty string", Boolean(""));
