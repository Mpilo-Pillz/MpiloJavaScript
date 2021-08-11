var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(acc, desk) {
      if(desk.type === "sitting") {
          acc.sitting++;
      } 
      if(desk.type === "standing") {
        acc.standing++;
      } 

      return acc;
       
      
      
  }, { sitting: 0, standing: 0 });

  console.log(deskTypes);
  