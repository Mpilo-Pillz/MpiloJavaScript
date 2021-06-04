const colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'indigo',
    'violet'
];
const h1 = document.querySelector('h1');
h1.addEventListener('mouseover', function () {
    console.log(this.innerText);
})
const printColor = function () {
    // console.log('clicked', box.style.backgroundColor);
    h1.style.color = this.style.backgroundColor;
    console.log(this);
    console.log('clicked', this.style.backgroundColor);
}

const container = document.getElementById('boxes');
for (let color of colors) {
    const box = document.createElement('div');
    box.style.backgroundColor = color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', printColor)

    /*
        if it wasnt for this we would have to do the below
        box.addEventListener('click', function () {
            printColor(box)
            
        })

        const printColor = function(box) {
     console.log('clicked', box.style.backgroundColor);
    
}
    */
}