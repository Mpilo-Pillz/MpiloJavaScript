const notes = ["Note1", "Note2", "Note3"];

const doThis = function (note, index) {
    console.log(`${index}. ${note}`);
} // this function will be called 3 times once for every item in my array

notes.forEach(doThis);