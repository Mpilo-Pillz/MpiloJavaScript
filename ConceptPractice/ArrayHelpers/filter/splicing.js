const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]

reorder = months.splice(2, 1);
console.log(reorder);
months.push(reorder);
months.push(reorder[0]);
console.log(months);
 
