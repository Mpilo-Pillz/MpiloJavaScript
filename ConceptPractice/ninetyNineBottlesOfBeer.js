function beerSong(bottleOfBeer){
    var lyrics = "";

    for(numberOfBottles = bottleOfBeer; numberOfBottles > 0; numberOfBottles--){
        if(numberOfBottles > 2) {
            console.log("\n " + numberOfBottles + " bottles of beer on the wall, "+numberOfBottles+" bottles of beer. \nTake one down and pass it around, " + (numberOfBottles - 1) +" bottles of beer on the wall.\n");
            


        } else if (numberOfBottles == 2) {
            console.log("\n " + numberOfBottles+ " bottles of beer on the wall, " + numberOfBottles + " bottles of beer. \nTake one down and pass it around, " + (numberOfBottles - 1) + " bottle of beer on the wall.\n");
        } else {
            console.log("\n " + numberOfBottles + " bottle of beer on the wall, " + numberOfBottles + " bottle of beer. \nTake one down and pass it around, no more bottles of beer on the wall.\n");
            
        }
   
    
    }
    console.log("\nNo more bottles of beer on the wall, No more bottles of beer, \nGo to the store and buy some more, 99 bottles of beer on the wall.\n");
    
}
beerSong(99);