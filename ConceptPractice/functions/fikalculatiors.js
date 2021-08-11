tipCalculator = function (billWithoutTip, tipPercent = 10) {
     tipPercent = tipPercent / 100;
     tip = billWithoutTip * tipPercent;
     priceWithTip = tip + billWithoutTip;

     console.log(`price without tip is R${billWithoutTip}`);
     console.log(`tip percentage is ${tipPercent * 100}%`);
     console.log(`tip is R${tip}`);
     console.log(`total price iwth tip is R${priceWithTip}`);
}

tipCalculator(200, 15)

let gradeCalculator = function (score, totalPossibleScore) {
    
     if (typeof score === 'number' && typeof totalPossibleScore === 'number') {
          let scorePErcentage = (score / totalPossibleScore) * 100;
    let grade;
    if (scorePErcentage >= 90 ) {
         return grade = 'A+'
    } else if (scorePErcentage <=89 && scorePErcentage >= 80) {
         grade =  'A'
    }
    else if (scorePErcentage <=79 && scorePErcentage >= 70) {
         grade =  'B'
    }
    else if (scorePErcentage <=69 && scorePErcentage >= 60) {
         grade =  'C'
    }
    else if (scorePErcentage <=59 && scorePErcentage >= 50) {
         grade =  'D'
    }
    else if (scorePErcentage <=49 && scorePErcentage >= 40) {
         grade =  'E'
    }
    else {
         grade = 'F'
    }

    return `you socred ${scorePErcentage.toFixed(2)}% that is a grade of ${grade}`
     } else {
          throw Error('Pleasue use numbers');
     }
    
} 

try {
     console.log(gradeCalculator(50, 90));
console.log(gradeCalculator(60, 80));
console.log(gradeCalculator(30, 70));
console.log(gradeCalculator(20, 60));
console.log(gradeCalculator(30, 65));
console.log(gradeCalculator(10, 40));
console.log(gradeCalculator(40, 50));
console.log(gradeCalculator(6, 10));
} catch (e) {
    console.log(e.message); 
}



let convertFarenheit = function(farenheit) {
    return {
        farenheit: farenheit,
        celcius: (farenheit - 32) * (5 / 9),
        kelvin: (farenheit + 459.67) * (5 / 9),
    }
}
let objTemps = convertFarenheit(80) 
console.log(objTemps);
