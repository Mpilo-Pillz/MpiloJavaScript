function sayIt(translator) {
    let phrase = translator("Hi");
    console.log(phrase);
}

function mzansiTranslator(word) {
    if (word === "Hi") return "Eita";
    if (word === "Bye") return "Shap";
}

sayIt(mzansiTranslator);