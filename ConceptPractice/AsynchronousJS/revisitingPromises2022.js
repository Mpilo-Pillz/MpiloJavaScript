let promise = new Promise((resolve, reject) => {
    let a = 1 + 1;

    if (a == 2) {
        resolve('Succeeded')
    } else {
        reject("Failed")
    }
})

promise
    .then((message) => console.log(`this ${message} in in the then`))
    .catch((message) => console.log(`This ${message} in the catch`))