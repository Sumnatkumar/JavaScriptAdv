class Account {
    acc_Id;
    acc_Name;
    acc_Bal;
    constructor(id, name, amount) {
            this.acc_Id = id
            this.acc_Name = name
            this.acc_Bal = amount
        } //special method
    deposit_Account(amount) {
            this.acc_Bal = this.acc_Bal + amount
        } //normal method
}

let a1 = new Account(101, 'Rahul', 5000)
let a2 = new Account(102, 'Sonia', 70000)
let a3 = new Account(103, 'Sonia', 75000)

console.log(a1)
console.log(a2)
console.log(a3)

a1.deposit_Account(100)
a1.deposit_Account(10)
console.log(a1)
console.log("Account Id:", a1.acc_Id, "and Name:", a1.acc_Name)
console.log("Account Id:", a2.acc_Id, "and Name:", a2.acc_Name)
console.log("Account Id:", a3.acc_Id, "and Name:", a3.acc_Name)