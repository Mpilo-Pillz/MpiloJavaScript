function makeBullPoop() {
    var words1 = ["Da Hommies","Caahz", "Caah", "Windows", "Jabba"];
    var words2 = ["in the cut","roll deep", "down for what ever", "is out here slippin", "use Ubutu"];
    var words3 = ["is On E","hit the spot", "get another sack", "sit up in the back", "code on a Mac"];

    genRandword1 = Math.floor(Math.random() * words1.length);
    genRandword2 = Math.floor(Math.random() * words2.length);
    genRandword3 = Math.floor(Math.random() * words3.length);

    var fromWords1 = words1[genRandword1];
    var fromWords2 = words2[genRandword2];
    var fromWords3 = words3[genRandword3];

    phrase = `${fromWords1} ${fromWords2} ${fromWords3}`;

    console.log(phrase);
    
}

makeBullPoop();