const getDataCallback = (callback) => {
    setTimeout(() => {
        // callback(undefined, 'This is the data')
        callback('This is the error', undefined)
    }, 2000)
}

getDataCallback((err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log(data)
    }
})

const getDataPromise = (data) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(`this is the success data: ${data}`)
    }, 2000)
})
const myPromise = getDataPromise(123)
// const myPromiseLong = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('This is the promise data');
//         reject('This is the promise error');
//     }, 2000)
// });

myPromise.then((data) => {
    console.log(data);
}, (err)=> {
    console.log(err);
})

myPromise.then((data) => {
    console.log(data);
}, (err)=> {
    console.log(err);
})

