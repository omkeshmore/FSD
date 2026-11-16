// Create Employee Class

class Employee {

    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    isEligibleForBonus() {
        return this.salary > 250000;
    }
}

// Create Employee Objects

let employees = [
    new Employee("Rahul", "IT", 300000),
    new Employee("Amit", "HR", 200000),
    new Employee("Priya", "Sales", 400000),
    new Employee("Sneha", "IT", 220000)
];

// Filter Eligible Employees

let eligibleEmployees = employees.filter(emp => emp.isEligibleForBonus());

// Display Result

console.log("Employees Eligible for Bonus:");

eligibleEmployees.forEach(emp => {
    console.log(emp.name, emp.department, emp.salary);
});