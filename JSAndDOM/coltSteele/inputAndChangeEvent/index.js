const creditCardInput = document.querySelector('#cc');
const termsCheckbox = document.querySelector('#terms');
const veggieSelect = document.getElementById('veggie');
const inputEvent = document.getElementById('inputEvent');

const formData = {};

creditCardInput.addEventListener('input', function (e) {
    console.log('CC CHANGED', e);
    formData['cc'] = e.target.value; // creates a key cc and adds value of whats typed
    inputEvent.innerHTML = `${formData['cc']}`;
});

veggieSelect.addEventListener('input', function (e) {
    console.log('veggie changed', e);
    formData['veggie'] = e.target.value; // creates a key cc and adds value of whats typed
});

termsCheckbox.addEventListener('input', e => {
    console.log('Check Box');
    formData['aggreeToTerms'] = e.target.checked;
})