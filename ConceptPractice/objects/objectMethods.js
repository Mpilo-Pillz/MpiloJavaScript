let restaurant = {
  name: "Dla-Mini Bistro",
  guestCapacity: 100,
  guestCount: 0,
  checkAvailability: function (partySize) {
    // console.log(this);
    let seatsLeft = this.guestCapacity - this.guestCount;
    return partySize <= seatsLeft;
  },
  seatParty: function (partySize) {
    this.guestCount = this.guestCount + partySize;
  },
  removeParty: function (partySize) {
    this.guestCount = this.guestCount - partySize;
  },
};

restaurant.seatParty(85);
console.log(restaurant.checkAvailability(20));
restaurant.removeParty(70);
console.log(restaurant.checkAvailability(10));
// console.log(status);

const object1 = {
  a: "somestring",
  b: 42,
  c: true,
};

for (const [key, value] of Object.entries(object1)) {
  console.log(`${key}: ${value}`);
}

console.log(Object.entries(object1));
