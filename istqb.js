var GrossPay = prompt("Enter Gross pay");
var Allowance = prompt("Enter Allowance");
var Expenses = prompt("Enter Expenses");

var NetPay;
var Tax;

var TaxablePay;
var HighRate;
var MidRate;
var LowRate;

function calculateTx(){
 HighRate = 0;
 MidRate = 0;
 LowRate = 0;

 TaxablePay = GrossPay - Allowance - Expenses;

 if(TaxablePay > 40000) {
     HighRate = (TaxablePay - 40000) * (40 / 100);
      TaxablePay = 40000;
      console.log("I hit 40000");
 }
 else if(TaxablePay > 22000) {
     MidRate = (TaxablePay - 22000) * (22 / 100);
       TaxablePay = 22000;
       console.log("I hit 22000");

 } else if (TaxablePay >= 5000){
     LowRate = (TaxablePay - 5000) * (10 / 100);
     TaxablePay = 5000;
     console.log("I hit 5000");
 }

 Tax = HighRate + MidRate + LowRate;
 NetPay = GrossPay - Tax;

 console.log("Tax owed this year is " + Tax);
 console.log("Net pay for this year is " + NetPay);

 document.writeln("Tax owed this year is " + Tax);
 document.writeln("Net pay for this year is " + NetPay);

}

calculateTx();

