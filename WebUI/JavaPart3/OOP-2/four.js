class Account {
    acc_Id;
    acc_Name;
    acc_Bal = 0;
    open_Account() {
        console.log("Account Opened Successfully")
    }
    deposit_Account(amount) {
        console.log("Account Deposited Successfully", amount)
    }
    withdrawl_Account() {
        console.log("Account withdrawl Successfully")
    }
    get_Bal() {
        console.log("Account get Successfully")
    }
    close_Account() {
        console.log("Account close Successfully")
    }
}
let a1 = new Account()
a1.open_Account()
a1.deposit_Account(5000)
a1.withdrawl_Account()
a1.get_Bal()
a1.close_Account()
let a2 = new Account()
a2.open_Account()
a2.deposit_Account()
a2.withdrawl_Account()
a2.get_Bal()
a2.close_Account()
let a3 = new Account()
a3.open_Account()
a3.deposit_Account()
a3.withdrawl_Account()
a3.get_Bal()
a3.close_Account()
let a4 = new Account()
a4.open_Account()
a4.deposit_Account()
a4.withdrawl_Account()
a4.get_Bal()
a4.close_Account()
let a5 = new Account()
a5.open_Account()
a5.deposit_Account()
a5.withdrawl_Account()
a5.get_Bal()
a5.close_Account()