let farenheit = 32;
let currentTempInFarenheit = 35;
let celcius = (currentTempInFarenheit - farenheit) * 5/9
let kelvin = (currentTempInFarenheit - farenheit) * 5/9 + 273.15

console.log(`${celcius} degrees celcius`);
console.log(`${kelvin} degrees kelvin`);

isCold = celcius <= 15;
isWarm = celcius >= 16;

console.log(isCold);
console.log(isWarm);

let convertFarenheitToCelcius = function (currentTempInFarenheit) {
    return funcelcius = (currentTempInFarenheit - farenheit) * 5/9;
}

console.log('function -->', convertFarenheitToCelcius(90));
// let funCelcius = convertFarenheitToCelcius(90)
