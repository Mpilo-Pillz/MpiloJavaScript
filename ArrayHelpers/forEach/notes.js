const notes = ["Note1", "Note2", "Note3"];

const doThis = function (note, index) {
    console.log(`${index}. ${note}`);
} // this function will be called 3 times once for every item in my array

notes.forEach(doThis);

const todoList = [
    {description: "Do laundry", done: false},
    {description: "Walk the dog", done: false},
    {description: "Buy groceries", done: false}
  ]
  todoList.forEach(task => task.done = true)
  console.log(todoList)