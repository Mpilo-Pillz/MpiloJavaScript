const sideProjectInAngular = new Promise((resolve, reject) => {
    resolve('Live Angular Project')
})

const sideProjectInReact = new Promise((resolve, reject) => {
    resolve('Live React Project')
})

const sideProjectInVue = new Promise((resolve, reject) => {
    resolve('Live Vue Project')
})

//takes an array of all promises we want to run
// runs as soon as one has completed
Promise.race([sideProjectInVue, sideProjectInAngular, sideProjectInReact])
    .then((message) => {
        console.log('a single message of the first one to resolve', message);
    })


// if we want our promises to run in paralelle and not worry about waiting  for the next