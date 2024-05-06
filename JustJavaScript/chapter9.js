let sherlock = {
    surname: 'Holmes',
    address: { city: 'London' }
}

let john = {
    surname: 'Watson',
    address: sherlock.address
}

john.surname = 'Lennon';
john.address.city = 'Malibu'
