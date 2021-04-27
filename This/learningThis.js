/* when the below function is executed in the browser th evalue of
this will be th ewindow object and we will find the sayHi function as 
a property in the window object.

var get added to the global scope of window but let and const do not
*/
function sayHi() {
    console.log("Hi");
    console.log(this);
}

const greet = function () {
    //this will still refer to the window object
    console.log(this);
}