function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

var username = new Field("BigDigits");
var password = new Field("Poppin_Stop-it")
var email = new Field("right@with.it")

user.validate() && password.validate() && email.validate();

 var formIsValid = fields.every(function(field) {
    return field.validate();
});

// var formIsValid = fields.some(function(field) {
//     return field.validate();
// });

if (formIsValid) {
    console.log("posting to server");
     
} else {
    console.log("form is invalid");
    
}