const account = {
    name: 'Dla-Mini Studios',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({description, amount});
    },
    addIncome: function (description, amount) {
        this.income.push({description, amount});
    },
    getExpenseAccountSummary: function () {
        let totalExpenses = 0;
        this.expenses.forEach(expense => {
            totalExpenses = totalExpenses + expense.amount;
        });
        // return `${this.name} has ${this.expenses.amount}`
        return console.log(`${this.name} has R${totalExpenses} in expenses`);
    }, 
    getIncomeAccountSummary: function () {
        let totalIncome = 0;
        this.income.forEach(function(earning) {
            totalIncome = totalIncome + earning.amount;
        });
        return console.log(`${this.name} has R${totalIncome} in income`);
    },
    getAccountSummary: function () {
        let totalExpenses = 0;
        let totalIncome = 0;
        let balance = 0;

        this.totalExpenses = this.expenses.forEach(expense => {
            totalExpenses = totalExpenses + expense.amount;
        });

        this.income.forEach(function(earning) {
            totalIncome = totalIncome + earning.amount;
        });

        balance = totalIncome - totalExpenses;
        return console.log(`MpiloPillz has a balance of R${balance}. R${totalIncome} income and R${totalExpenses} in expenses`);
    }
}



account.addExpense('MacBook Pro', 60000);
account.addExpense('Ipad Pro', 30000);
account.addExpense('Mpillz Expenses', 40000);
account.addIncome('Mpillz Salary', 50000);
account.addIncome('Clinic Workflow', 50000);
account.addIncome('Rent', 30000);
account.addIncome('Apple Store shopping list app', 100000);
account.addIncome('Apple Store shopping list app', 90000);
account.getExpenseAccountSummary();
account.getIncomeAccountSummary();
account.getAccountSummary();
// console.log(account)
