const btn = document.querySelector("button");
const moveX = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bodyBoundary = document.body.clientWidth;
      const elRight = element.getBoundingClientRect().right;
      const currentLeft = element.getBoundingClientRect().left;

      if (elRight + amount > bodyBoundary) {
        reject({ bodyBoundary, elRight, amount });
      } else {
        element.style.transform = `translateX(${currentLeft + amount}px)`;
        resolve();
      }
    }, delay);
  });
};

moveX(btn, 300, 1000)
  .then(() => {
    console.log("DONE MOVING NEW ONE COMING");
    return moveX(btn, 300, 1000);
  })
  .then(() => {
    console.log("DONE MOVING SECOND ONE");
    return moveX(btn, 300, 1000);
  })
  .then(() => {
    console.log("DONE MOVING THIRD ONE");
    return moveX(btn, 300, 1000);
  })
  .then(() => {
    console.log("DONE MOVING FOURTH ONE");
    return moveX(btn, 300, 1000);
  })
  .catch(({ bodyBoundary, amount, elRight }) => {
    console.log(`Body is ${bodyBoundary}px wide`);
    console.log(`Element is at ${elRight}px, ${amount}px is too large`);
    console.log("outta space!");
  });
