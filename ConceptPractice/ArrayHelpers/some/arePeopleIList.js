const people = [
    { id: 1, name: 'Anele' },
    { id: 2, name: 'Banele' },
    { id: 3, name: 'Coliswa' },
    // ... more person objects
  ];

  const targetId = 4; // Change this to the ID you want to check

const isIdNotInArray = !people.some(person => person.id === targetId);

if (isIdNotInArray) {
  console.log(`ID ${targetId} is not in the array.`);
} else {
  console.log(`ID ${targetId} is in the array.`);
}

// replaces
const targetIdLog = 4; // Change this to the ID you want to check
let isIdNotInArrayLong = true;

for (const person of people) {
  if (person.id === targetId) {
    isIdNotInArray = false;
    break; // Exit the loop early if the ID is found
  }
}

if (isIdNotInArray) {
  console.log(`ID ${targetId} is not in the array.`);
} else {
  console.log(`ID ${targetId} is in the array.`);
}
