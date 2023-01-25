const a = { duration: 50, title: '' };

a.duration ||= 10;

console.log(a.duration);
// logs 10

a.title ||= 'title is empty'
console.log(a.title);