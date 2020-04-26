var computers = [
    {name: 'Asus', ram: 16},
    {name: 'Alienware', ram: 64},
    {name: 'Compaq', ram: 2}
];

var allComputersCanRunPrograms = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
    var computers = computers[i];

    if (computers.ram < 16) {
        allComputersCanRunPrograms = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
}


/////////////////////////////Refactor with every
//if any thing returns false then the whole expression is false just like &&
computers.every(function(computer) {
    return computer.ram > 16;
});


////////Regatror with Some
///Some returns true if atleast one record returns true just likee || 

computers.some(function(computer) {
    return computer.ram > 16;
});