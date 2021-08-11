const btn = document.querySelector("button");

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`;
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

const moveXFirstVersion = (element, amount, delay, callback) => {
  const bodyBoundary = document.body.clientWidth;
  const elRight = element.getBoundingClientRect().right;
  console.log(bodyBoundary);
  setTimeout(() => {
    element.style.transform = `translateX(${amount}px)`;
    if (callback) callback();
  }, delay);
};

moveXFirstVersion(btn, 100, 1000, () => {
  moveXFirstVersion(btn, 200, 1000, () => {
    moveXFirstVersion(btn, 300, 1000, () => {
      moveXFirstVersion(btn, 400, 1000, () => {
        moveXFirstVersion(btn, 500, 1000);
      });
    });
  });
});

const moveX = (
  element,
  amount,
  delay,
  onSuccessCallback,
  onFailureCallback
) => {
  const bodyBoundary = document.body.clientWidth;
  const elRight = element.getBoundingClientRect().right;
  const currentLeft = element.getBoundingClientRect().left;

  //checking that we dont move out of bounds

  if (elRight + amount > bodyBoundary) {
    // i guess if elRight is more than 0 (truthy)
    console.log("CANT GO THAT FAR");
    console.log(bodyBoundary);
    onFailureCallback();
  } else {
    setTimeout(() => {
      element.style.transform = `translateX(${currentLeft + amount}px)`;
      if (onSuccessCallback) onSuccessCallback();
    }, delay);
  }
};

moveX(btn, 100, 1000, () => {
  moveX(btn, 100, 1000, () => {
    moveX(btn, 100, 1000, () => {
      moveX(btn, 100, 1000, () => {
        moveX(btn, 500, 1000);
      });
    });
  });
});

function request(sucessCallback, failureCalback) {
  if (true) {
    sucessCallback();
  } else if (false) {
    failureCalback();
  } else {
    console.log("unessasary else");
  }
}

// this is how messy it can get
// moveX(btn, 100, 1000, () => {
//   //success
//   moveX(btn, 400, 1000, (success) => {}, (fail) =>)
// }, () => {
//   //fail call back
//   alert('cannot go further');
// })

// without failure call back
// const moveX = (element, amount, delay, callback) => {
//   const bodyBoundary = document.body.clientWidth;
//   const elRight = element.getBoundingClientRect().right;
//   const currentLeft = element.getBoundingClientRect().left;

//   //checking that we dont move out of bounds

//   if (elRight + amount > bodyBoundary) {
//     // i guess if elRight is more than 0 (truthy)
//     console.log("CANT GO THAT FAR");
//     console.log(bodyBoundary);
//   } else {
//     setTimeout(() => {
//       element.style.transform = `translateX(${currentLeft + amount}px)`;
//       if (callback) callback();
//     }, delay);
//   }
// };
