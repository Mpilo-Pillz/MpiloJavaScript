// const {fromEvent } = require('rxjs')

// const app = document.querySelector("#app")
// const input = document.createElement('input');

// // const
// app.appendChild(input)


// https://out.stegrider.vercel.app/
// the below only works on the website above
const { fromEvent } = Rx;
const { map } = RxOperators;

const input = document.createElement('input');
const container = document.querySelector('.container');
container.appendChild(input)

const observable = fromEvent(input, 'input').pipe(
map(event => event.target.value),
map(value => parseInt(value)),
map(value => {
    if (isNaN(value)) {
throw new Error('Enter a number');
}
return value
    })
)

observable.subscribe({
next(value) {
console.log(`Your value is ${value}`);
},
error(err) {
	console.error('Bad thing happened!!!!!', err.message)
},
})


// This is specific to this tool
observable;
