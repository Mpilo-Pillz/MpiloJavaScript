var products = ["Choo Choo Chocolate", "Icy Mint","Bubblegum", "Cake Batter", ];
var hasBubbleGum = [false, true,true, false];

for(var i = 0; i < hasBubbleGum.length; i++) {
    if (hasBubbleGum[i]) {
        console.log(`${products[i]} contains bubblegum ${hasBubbleGum[i]}`);
    } else {
        console.log(`NO BUBBLE GUM IN ${products[i]} ---> ${hasBubbleGum[i]}`);
        
    }
}