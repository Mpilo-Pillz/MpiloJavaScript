const implemented = true;
const stillNeedTutorials = false

function watchTutorialCallback(callback, errorCallback) {
    if (implemented) {
        errorCallback({
            name: "You understand this concept",
            message: ':D'
        })
    } else if (stillNeedTutorials) {
        errorCallback({
            name: 'Watch another tutorial and implment',
            message: ':)'
        })
    } else {
        callback('NEw concept. Watch tutorials and read docs')
    }
}

watchTutorialCallback((message) => {
    console.log('Success: ' + message);
}, (error) => {
    console.log(error.name + ' ' + error.message);
})