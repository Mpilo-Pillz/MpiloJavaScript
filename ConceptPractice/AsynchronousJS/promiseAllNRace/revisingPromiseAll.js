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
// runs as soon as all have completed
Promise.all([sideProjectInVue, sideProjectInAngular, sideProjectInReact])
    .then((messages) => {
        console.log('an array with all the resolved', messages);
    })


// if we want our promises to run in paralelle and not worry about waiting  for the next