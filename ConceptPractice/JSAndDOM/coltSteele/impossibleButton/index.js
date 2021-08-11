const btn = document.querySelector('button');

btn.addEventListener('mouseover', function () {
    console.log("available window size DONT USE -->", window.screen);
    console.log("available window size height -->", window.innerHeight);
    console.log("available window size width -->", window.innerWidth);

    const height = Math.floor(Math.random() * window.innerHeight);
    const width = Math.floor(Math.random() * window.innerWidth);

    btn.style.left = `${width}px`;
    btn.style.top = `${height}px`;
});

btn.addEventListener('click', function () {
    btn.innerText = 'YOU GOT ME';
    document.body.style.backgroundColor = 'green';
});