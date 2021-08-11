const cribs = {
    locations: ['Oakdene', 'MarshallsTown', 'Maboneng']
};

const {locations: [ location]} = cribs;


const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
  ];
  
//   const classesAsObject;

//   const [chemistry, physics, maths] = classes;

  const [[chemistry, time, teacher], physics, maths] = classes;
  

  console.log(time);
  
//   const [chemistry, ...rest] = classes;
//   console.log(rest);

classes.map(([subject, time, teacher]) => {
    return { subject,time, teacher};
});

const classesAsObject = classes.map((c) => {

 

    return {subject:c[0], time:c[1], teacher:c[2]};
  
  
  
  });