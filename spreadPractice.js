const mpilo = {
    id: 12,
    age: 32,
    hobbies: ["Music", "Sports", "Workout"],
    socialMediaPosts: undefined,
    dateSubscrubed: new Date(),
    searchCriteria: '/*/'
}

console.log(JSON.stringify(mpilo))

const { id, ...mpiloWithoutId } = mpilo

console.log(mpiloWithoutId);

const array1 = [5, 12, 8, 130, 44];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"
