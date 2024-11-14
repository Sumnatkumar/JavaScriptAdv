class Account {
    open_Account() {
        console.log("Account opened Successfully")
    }
    deposit_Account(amount) {
        console.log(`Amount- ${amount} - Deposited Successfully`)
    }
    withdrawl_Account(amount) {
        console.log("Amount withdrawl successfully!")
    }
}

let a1 = new Account()

a1.open_Account();
a1.deposit_Account(5000)
a1.withdrawl_Account(1000)