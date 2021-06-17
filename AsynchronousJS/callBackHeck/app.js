const btn = document.querySelector("button");

setTimeout(() => {
  btn.style.transform = `translateX(100px)`;
  setTimeout(() => {
    btn.style.transform = `translateX(200px)`;
  }, 2000);
}, 1000);
