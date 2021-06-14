let p = new Promise((resolve, reject) => {
    let a = 1 + 4;
    if (a == 5) {
        resolve("success")
    } else {
        reject('failed')
    }
})

p.then((message) => {
    console.log("this is in then" + message);
}).catch((message) => console.log("this is the catch" + message))