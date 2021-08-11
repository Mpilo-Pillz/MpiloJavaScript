var numberOfBottles = 3;
while (numberOfBottles >= 0 ) {
    var bottleWord = "bottles";
    if (numberOfBottles === 1){
        bottleWord = "bottle";
    } else if (numberOfBottles === 0){
        bottleWord = "no more "
    }
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
    numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}