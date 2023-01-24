const a = { duration: 50, titles: '' };

a.duration ||= 10;

console.log(a.duration);
// logs 10