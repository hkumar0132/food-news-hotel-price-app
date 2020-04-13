class Employee {
    empName : string;

    constructor(name : string) {
        this.empName = name;
    }

    greet() {
        console.log("My name is " + this.empName);
    }
}

let emp1 = new Employee("Himanshu");
console.log(emp1.empName);
emp1.greet();

class Manager extends Employee {

    constructor(managerName: string) {
        super(managerName); 
    }

    delegateWork() {
        console.log("Manager delegates work");
    }
}

let m1 = new Manager("Bruce Wayne");
m1.delegateWork();
m1.greet();
console.log(m1.empName);
