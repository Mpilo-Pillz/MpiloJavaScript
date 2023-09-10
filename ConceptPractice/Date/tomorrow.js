// Get the input element
const datePicker = document.getElementById("datePicker");

// Get the current date
const currentDate = new Date();

// Calculate tomorrow's date
const tomorrowDate = new Date(currentDate);
tomorrowDate.setDate(currentDate.getDate() + 1);

// Set the minimum date to tomorrow
datePicker.setAttribute("min", tomorrowDate.toISOString().split('T')[0]);