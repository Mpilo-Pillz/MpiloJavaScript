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

