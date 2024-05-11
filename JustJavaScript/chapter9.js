let sherlock = {
    surname: 'Holmes',
    address: { city: 'London' }
}

let john = {
    surname: 'Watson',
    address: sherlock.address
}

john.surname = 'Lennon';
// john.address.city = 'Malibu'
// john.address = { city: 'Malibu' }
john = {
    surname: 'Lennon',
    address: { city: 'Malibu' }
}

console.log(sherlock.surname); // "Holmes"
console.log("Watch this------>", sherlock.address.city); // "Malibu" // corrected by replacing line 12 with line 13 or line 14
console.log(john.surname); // "Lennon"
console.log("NAd this -->", john.address.city) // "Malubi"

// let vs const for objects aka reference variiables
const shrek = { speciies: 'ogre' } // cannot be reassigned
let fiona; // Changes the error on line 27 from Reference Error to Type Error
// shrek = fiona; // Reference Error without let fiona  

// can still be mutated
shrek.speciies = 'human';
console.log(shrek.speciies); // 'human'

const batman = {
    address: {
        city: 'Gotham'
    }
}

// let robin = batman
let robin = {
    address: batman.address
}

batman.address = {
    city: "Ibiza"
}

console.log(robin.address.city) // Ibiza iif line 39 is commented in, Gothan if line 40 is commented in