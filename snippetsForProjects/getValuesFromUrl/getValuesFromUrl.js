// let url = 'https://www.example.com?name=n1&name=n2';
url = window.location.href
let params = (new URL(url)).searchParams;
params.get('name') // "n1"
params.getAll('name') // ["n1", "n2"]