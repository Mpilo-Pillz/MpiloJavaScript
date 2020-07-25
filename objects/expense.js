let myAccount = {
    name: 'Mpilo Pillz',
    expenses: 0,
    income: 0,
}

let addExpense = function (account, expense) {
    return account.expenses = account.expenses + expense;
}

let addIncome = function (account, income) {
    return account.income = account.income + income;
}

let getAccountSummary = function(account) {
    let balance = account.income - account.expenses
    return `${account.name} has an net balance of R${balance}. 
    An income of R${account.income} and expenses of R${account.expenses}.` 
}


let resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
}

// addExpense(myAccount, 2.50)
resetAccount(myAccount);
addExpense(myAccount, 5000);
addIncome(myAccount, 100000);
addExpense(myAccount, 10000);
addExpense(myAccount, 5000);
addExpense(myAccount, 10000);
addExpense(myAccount, 14000);
addExpense(myAccount, 10000);
addExpense(myAccount, 6000);
addIncome(myAccount, 6000)
addIncome(myAccount, 11000)
addIncome(myAccount, 6500)
addIncome(myAccount, 7500)
console.log(getAccountSummary(myAccount));
console.log(myAccount);
