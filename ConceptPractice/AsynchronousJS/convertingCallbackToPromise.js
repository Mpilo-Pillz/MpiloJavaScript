const implemented = false;
const stillNeedTutorials = true;

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (implemented) {
            reject({
                name: "You understand this concept",
                message: ':D'
            })
        } else if (stillNeedTutorials) {
            reject({
                name: 'Watch another tutorial and implment',
                message: ':)'
            })
        } else {
            resolve('NEw concept. Watch tutorials and read docs')
        }
    })
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message);
}).catch((error) => {
    console.log(error.name + ' ' + error.message);
})