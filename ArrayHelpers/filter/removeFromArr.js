let list = [1,2,3,4,5, 'pineapple', 'banana', 'watermelon', 'sharon fruit', 6,7, 'grapes', 'passion fruit', 'grape fruit', 'dragon frit', 8, 9, 'pommergranate', 10, 'avocado'];
// let fruits = [];
// let numers = [];
// const exReg = /^[0-9]/;

// numbers = list.filter(number => {
//     return number <= 10;
// });

// const typesOfList = list.map(l => {
//     return typeof(l);
// })


// // console.log('num arr ->', numbers);

// fruits = list.filter(fruit => {
// //    const exReg = /^[a-zA-Z]$/;
// //     if (exReg.test(fruit)) {
// //         return fruit;
// //     }
// });

// fruits = list.filter(fruit => {
    
//     if (typeof(fruit) === 'string') {
//         // console.log(fruit);
//         return fruit;
//     }
// })

// // console.log('resex test -->',exReg.test('12345'));
// // console.log('num arr ->', numbers);
// // console.log('fruit arr ->', fruits);
// // console.log('types in arr ->', typesOfList);
// // console.log('sortedList-->' + [...fruits, ...numbers]);
// // console.log('sortedList-->', [...fruits, ...numbers]);
// // console.log('leeest', list);


// // console.log('spliced list-->', list.indexOf('banana'));
// // list.forEach(item => {
// //     if(typeof(item) === 'string') {
        
// //         var item = list.splice(list.indexOf(item), 1);
// //         console.log('iytem-->', item);
        
// //         list.push(item[0]);
// //     }
// // });

// // console.log('spliced list-->', list);

// list.reverse().forEach(item => {
//     if(typeof(item) === 'string') {
//         console.log('item-->', item);
//         list.splice(item, 1);
//                 //  var iytem = list.splice(item, 1);
//                 // console.log('iytem-->', iytem);
                
//                 // list.push(iytem[0]);
//             }
// })

list.push('|')
for (i = list.length - 1; i >= 0; --i) {
    if (typeof(list[i]) === 'string') {
    //   list.splice(i, 1); // Remove even numbers
      list.push(list.splice(i, 1)[0])
    }
  }

  console.log('liist-->', list);
  console.log('list-->'+list);
  console.log(list.toString());
  

