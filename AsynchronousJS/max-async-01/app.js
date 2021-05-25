const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Cedzile");
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then((posData) => {
      positionData = posData;
      return setTimer(2000); //returns a new promise
    })
    .catch((err) => {
      console.error(err);
      return "on we go"; // use .catch instead of passing it as a second argument in the first .then()
    })
    .then((data) => {
      console.log(data, position);
    });

  setTimer(1000).then(() => {
    console.log("Timer done");
  });
  console.log("Getting position");
}

button.addEventListener("click", trackUserHandler);

let result = 0;

// for (let i = 0; i < 10000000000; i++) {
//   result += 1
// }

console.log("THIS CODE WAS BLOCKED-->", result);

// shell overall state either iframe or json schema
//iframe module - ract app
//node - library

// function trackUserHandler() {
//   navigator.geolocation.getCurrentPosition(posData => {
//     setTimeout(() =>{
//       console.log(posData);
//     }, 2000)

//   }, error => console.error(error));
//   console.log('Clicked!');
//   console.log('Getting position!');

// }

// function trackUserHandler() {
//   debugger
//   navigator.geolocation.getCurrentPosition(posData => {

//     setTimer(2000).then(data => console.log(data, posData));
//   },
//   error => {
//     debugger
//     console.error(error)
//   });
//   console.log('Clicked!');
//   console.log('Getting position!');

// }
