function bark(name, weight) {
    if(weight > 20) {
        console.log(name + 'says WOOF WOOF!'); 
    } else {
        console.log(name + 'says woof woof');
        
    }
}

bark("juno", 20)
bark("bruno", -1)