const todos = ['JavaScript', 'CSS', 'Angular', 'MongoDB'];

console.log(todos);

todos.splice(2, 1, 'TypeScript');
todos.splice(1,1);
const rearangMongo = todos.splice(2,1)

todos.unshift(rearangMongo[0])
// todos.push(todos.splice(1,1)); creates an arraywithinArray
todos.unshift('HTML/CSS');
todos.push('Java');
todos.push('JQuery');
console.log(todos);
const frontEndFrameworksTodos = [todos.pop('JQuery')];
frontEndFrameworksTodos.push('Angular')
frontEndFrameworksTodos.shift('JQuery');
frontEndFrameworksTodos[1] = 'Vue';
frontEndFrameworksTodos.splice(2, 0, 'React');
frontEndFrameworksTodos.unshift('ExpressJS')
frontEndFrameworksTodos.push('NestJS');
backEndFrameworksTodos = [frontEndFrameworksTodos.shift()];
backEndFrameworksTodos.push(frontEndFrameworksTodos.pop());
backEndFrameworksTodos[2] = 'Spring';
console.log('front end -->',frontEndFrameworksTodos);
console.log('back end -->',backEndFrameworksTodos);
// console.log('sliced-->',todos.slice(1));
console.log(todos);

todos.slice(1).forEach(function(todo, index) {
    console.log(`${index + 1}. ${todo}`);
} )

//// searching
console.log(frontEndFrameworksTodos.indexOf('Angular'))