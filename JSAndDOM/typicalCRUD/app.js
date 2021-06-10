const myInput = document.getElementById("myInput");
const mySubmit = document.querySelector("input[type='submit']");
const myForm = document.querySelector('form');


myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Saves us having to add an event listener to each form element -->', event);
    console.log('EVENT OBJ -->', event);

    let fromInput = event.target[0].value;
    let fromCheckbox = event.target[2].checked;
    // let fromCheckbox = event.target[2].value;
    console.log('Text -->', fromInput);
    console.log('Checkbox -->', fromCheckbox);
})

