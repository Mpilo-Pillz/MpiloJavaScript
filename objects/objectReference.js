let myAccount = {
    name: 'Thulani Karabo',
    expenses: 0,
    income: 0
}

let otherAccount = myAccount
otherAccount.income = 50000
otherAccount = {}

let addExpense = function (account, amount) {
    // account = {} if you dont want to manupulate the existing object? need to think this trhough
    account.expenses = account.expenses + amount;
    console.log(account);
}

addExpense(myAccount, 2.50)
console.log(myAccount);
console.log(otherAccount);