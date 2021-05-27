getCurrentPosition(() => {
  setTimeout(() => {
    doMoreAsyncStuff(() => {
      console.log("the stuff is done");
    });
  }, 1000);
}); // results in call back hell

someAsyncTask()
  .then(() => {
    return anotherTask();
  })
  .then(
    () => {
      return yetAnotherTask();
    },
    (err) => {
      console.error(
        "although this is fine rather use a .catch() instead of passing it as a second argument"
      );
    }
  )
  .catch(() => {
    console.error("this is much cleaner than the above");
  })
  .then(() => {
    console.log("another taks that wont run until the preceding ones have run");
  })
  .catch(() => {
    console.error(
      "tmoving catch at the end causes it to crash if that is what you want in most cases you want that"
    );
  });

  //revise promise.all and promise.race
