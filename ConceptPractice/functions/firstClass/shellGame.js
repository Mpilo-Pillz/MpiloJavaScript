var winner = function() { console.log('WINNER');}
var loser = function() { console.log('LOSER!');}

// winner(); //LOGS WINNER

var a = winner;
var b = loser;
var c = loser;

a() //log WINNER
b() //logs winner

c = a; //logs winner
// c();
a = b //a prints loser
// a();
b = c; //b prints winner
b();
c = a; //c prints loser
// c();
a = c; //a prints loser
// a()
a = b //a prints winner;
a();
b = c //b prints loser
b();
a(); //prints winner
