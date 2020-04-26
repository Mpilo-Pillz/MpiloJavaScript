// function unshift(array, a, b, c, d, e) {
//     return [a, b, c, d, e].concat(array);
//   }

//   function unshift(...array) {
//     return [...array];
//   }


  function unshift(...array) {
    return [...array];
  }
  
  console.log(unshift(3,2,1));

  const unshift = (array, ...items) => [...items, ...array]


  function unshift(array, ...items) {
    return [ ...items, ...array];
  }
  
  unshift(2,1,3);

  ///or
  const unshift = (array, ...items) => [...items, ...array]