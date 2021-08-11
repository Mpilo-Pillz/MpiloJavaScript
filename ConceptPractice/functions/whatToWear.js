function whatShallIWear(temp) {
    if( temp < 60) {
        console.log('Wear a JAcket');
    } else if (temp < 70) {
        console.log("Wear a sweater");
    } else {
        console.log("Wear t-shirt");
        
    }
}

whatShallIWear(50)
whatShallIWear(80)
whatShallIWear(60)

function doIt(param) {
    return param = 2;
}

var test = 1;
doIt(test);
console.log('do it value is now -->' + doIt(test));
console.log('do it value is now -->' + test);
