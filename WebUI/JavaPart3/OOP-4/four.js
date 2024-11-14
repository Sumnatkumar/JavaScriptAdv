class Account {
    acc_Name;
    acc_Email;
    constructor(name, email) {
        this.acc_Name = name
        this.acc_Email = email
    }

}
class SA extends Account {
    acc_Id;
    acc_Name;
    min_Email;
    min_Bal = 4000
    constructor(id, name, email, amount) {
        this.acc_Id = id
        this.acc_Name = name
        this.acc_Email = email
        this.min_Bal = amount
    }

}
class CA extends Account {
    acc_Id;
    acc_Name;
    min_Email;
    min_Bal = 4000
    constructor(id, name, email, amount) {
        super(name, email)
        this.acc_Id = id
        this.acc_Name = name
        this.acc_Email = email
        this.min_Bal = amount
    }

}


let sa1 = new SA(101, 'Rahul', 'Rahul@gmail.com', 5000)
let ca1 = new CA(102, 'Rahul', 'sonai@gmail.com', 45000)