const username = document.getElementById("username");

username.addEventListener('keydown', function (e) {
    console.log("KEY DOWN -> when any key on keyboard is pressed. This includes shift, enter, control");
});

username.addEventListener('keyup', function (e) {
    console.log("KEY UP - when any key on keyboard is RELESED after being pressed. This includes shift, enter, control");
});

username.addEventListener('keypress', function (e) {
    console.log("KEY PRESS - when any key on keyboard is after being pressed and must show in the input. This excludes shift, arrow, control");
    console.log("KEY PRESS - the return/enter key also count becuase it changes the value of input");
    console.log("KEY PRESS -may differ form browser to browser");
});

const addItemInput = document.querySelector('#addITem');
const itemsUL = document.getElementById('items');

addItemInput.addEventListener('keypress', function (e) {
    console.log('EVENT OBJECT-->', e);
    if (e.key === 'Enter') {
        if (!this.value) {
            itemsUL.insertAdjacentHTML('beforebegin', '<p><em>enter something</em></p>')
            return;
        };
        //add new item to list
        console.log(this.value);
        const newItemText = this.value;
        const newItem = document.createElement('li');
        newItem.innerText = newItemText;
        itemsUL.appendChild(newItem);
        this.value = '';
    }
})

