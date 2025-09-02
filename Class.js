class Emoloyee {
    id;
    name;
    salary;

    work() {
        console.log(this.name," is working");
    }

    meeting() {
        console.log(this.name," Attends Meeting");
    }
}

const e1 = new Emoloyee();
e1.id = 101;
e1.name = "Aditya";
e1.salary = 45000;

const e2 = new Emoloyee();
e2.id = 102;
e2.name = "Ravi";
e2.salary = 50000;

e1.work();
e2.work();