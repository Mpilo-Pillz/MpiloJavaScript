const keepingPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const rand = Math.random();

    if (rand < 0.5) {
      resolve("resolves the promise with the value inside");
    } else {
      reject(
        "if yo dont catch it will complain about uncaught in promise. TODO: SEE IF THAT CAN BE CAUGTH"
      );
    }
  }, 5000);

  //if you do not do any of the above the promise will be stuck on pending
});

keepingPromise.then((data) => console.log(data));
keepingPromise.catch((data) => console.log(data));
