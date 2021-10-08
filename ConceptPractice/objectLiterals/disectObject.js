const myObj = {
    firstName: "Mpilo",
    lastName: "Dlamini",
    companyName: "Fikasentech"
}

// ** Object.Keys
/** Puts keys into an array*/
console.log("ObjKeys-->", Object.keys(myObj))

//  ** Object.values
// * puts values into an array
console.log("ObjValues-->", Object.values(myObj))


//** Object Entries returns an array of arrays */
// * each array concists of the key and value in the nexted arra
// eg ["Mpilo", "Dlamini", "Fikasentech"]
console.log("Object entries-->", Object.entries(myObj))