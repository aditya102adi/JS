//Complex object represntation 
const emp = {
    eid: 102,
    ename: "Aditya",
    esalary: 650000,

    work: function() {
        console.log(this.ename," works");
    },

    meeting: function() {
        console.log(this.ename," is attending meeting");
    }
};

console.log(emp.eid);
emp.meeting();

console.log("=================================")


//Using class
class Emoloyee {
    id = 101;
    name = "Aditya";
    salary = 45000;

    work () {
        console.log("Employee is working");
    }

    meeting() {
        console.log("Employee Attends Meeting");
    }
}

const emp1 = new Emoloyee();
emp1.work();
emp1.meeting();