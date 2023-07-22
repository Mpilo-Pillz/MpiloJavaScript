const {Observable} = Rx;

const observable = new Observable((subscriber) => {
  // next emits 1 as the new value
subscriber.next(1);
  
  // no more new values are going to come out of this observable, even after you call next
  subscriber.complete();
  
  subscriber.error(new Error('What ever went wrong, note that we are not throwing an error'))
})

// these are not a direct reference to the above
// the values from above will flow int the below.
// you can chain a pipe before
observable.subscribe({
next(value) {
console.log("Got a value", value)
},
  complete() {
  console.log("Observab is complete dont expect anymore values")
  },                 
  error(err) {
  console.log("Bad thing!!", err.message)
  }
})

// required by the online ide
observable;