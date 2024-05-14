let sherlock = {
    surname: 'Holmes',
    address: { city: 'London' }
}

let john = {
    surname: 'Watson',
    address: sherlock.address
}

john.surname = 'Lennon';
// john.address.city = 'Malibu' // mutates
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

const batman = { // Quiz question 2
    address: {
        city: 'Gotham'
    }
} // batman -> {address} -> {city -> Gotham}  {address -> }

// let robin = batman
let robin = {
    address: batman.address
}

batman.address = {
    city: "Ibiza"
}

console.log(robin.address.city) // Ibiza iif line 39 is commented in, Gothan if line 40 is commented in

// Question 8 from Quiz
let daria = {
    address: { city: 'Lawndale' }
}

let place = daria.address;
place.city = 'L.A' // here we mutate

let jane = {
    address: place
}

console.log(daria.address.city)

// Quiz Question 6
let rick = {
    address: { city: 'C-137' }
}
let morty = {
    address: rick.address
}
rick.address = { city: '35C' } // does not mutate

console.log(morty.address.city) //
