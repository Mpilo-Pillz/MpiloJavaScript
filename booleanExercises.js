//humid
var temp = 81;
var willRain = true;
var humid = (temp > 80 && willRain == true);

console.log("value of humid is " + humid);

//kilobytes
var kb = 1287;
var tooBig = (kb > 1000);
var urgent = true;
var sendFile = (urgent == true || tooBig == false);
 console.log("Value of sendFile is " + sendFile);

 //level
 var keyPressed = "N";
 var points = 142;
 var level;
 if ( keyPressed == "Y" || (points > 100 && points < 2000)) {
     level = 2;
 } else {
     level = 1;
 }

 console.log("Value of level is " + level);

 //PRice - bob

 price = 100;
 if (price < 200 || price > 600) {
       console.log('Bob says PRice is too low or too high at ' + price);
 } else {
     console.log('Bob says PRice is right at' + price);
     
 }

 if (price >= 200 || price <= 600) {
     console.log('Bill says price is right at ' + price);
 } else {
     console.log('Bill says price is too low or too high at' + price);
     
 }
 
 