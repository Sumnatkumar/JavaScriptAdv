class Account {
    min_Bal = 500
    open_Account() {
        console.log("Account Opened Successfully!")
    }
    deposit_Account() {
        console.log("Account Deposited!")
    }
    withdrawl_Account() {
        console.log("Account withdrawl!")
    }
    get_Bal() {
        console.log("Low Balance!")
    }
    close_Account() {
        console.log("Account Closed!")
    }
}

let a1 = new Account()
a1.open_Account()
a1.deposit_Account()
a1.withdrawl_Account()
a1.get_Bal()
a1.close_Account()
console.log(a1.min_Bal)