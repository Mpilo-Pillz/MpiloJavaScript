// const bankAccount = {
//     balance: 10000,
//     accountHolder: 'Thualni'
// }

// function makePayment() {

// }


const bankBalance = 100000;
console.log("Balance before payment--->", bankBalance)

export function makePayment(currentBalance, paymentPrice) {
    const newBalance =  currentBalance - paymentPrice;
    console.log('bankBalamceAfter-->',newBalance)
}


// makePayment(100000, 1000)
// makePayment(100000, 40000)
// makePayment(100000, 2)
