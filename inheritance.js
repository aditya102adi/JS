// Parent class
class Employee {
    constructor(name, id, salary) {
        this.name = name;
        this.id = id;
        this.salary = salary;
    }

    displayDetails() {
        console.log(`Name: ${this.name}, ID: ${this.id}, Salary: ${this.salary}`);
    }

    skillsInfo() {
        console.log(`${this.name}'s Skills: ${this.skills}`);
    }
}

// Child class Developer
class Developer extends Employee {
    constructor(name, id, salary, skills) {
        super(name, id, salary); // call parent constructor
        this.skills = skills;
    }

    skillsInfo() {
        console.log(`${this.name}'s Developer Skills: ${this.skills}`);
    }

    project(projectName) {
        console.log(`${this.name} is working on project: ${projectName}`);
    }
}

// Child class Tester
class Tester extends Employee {
    constructor(name, id, salary, tools) {
        super(name, id, salary);
        this.tools = tools;
    }

    skillsInfo() {
        console.log(`${this.name} tests using tools: ${this.tools}`);
    }

    project(projectName) {
        console.log(`${this.name} is testing project: ${projectName}`);
    }
}

// Creating Developer object
const dev = new Developer("Aditya", 101, 60000, "JavaScript, React, Node.js");
dev.displayDetails();
dev.skillsInfo();
dev.project("E-Commerce Website");

console.log("-------------------");

// Creating Tester object
const tester = new Tester("Ravi", 102, 50000, "Selenium, Postman");
tester.displayDetails();
tester.skillsInfo();
tester.project("Banking Application");
