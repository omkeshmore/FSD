const express = require('express');

const app = express();

// Middleware to read JSON data
app.use(express.json());

// Employee records
let employees = [
    {
        id: 1,
        name: "Rahul",
        department: "IT",
        salary: 30000
    },
    {
        id: 2,
        name: "Amit",
        department: "HR",
        salary: 25000
    }
];

let nextId = 3;


// 1. GET - Display all employees
app.get('/employees', (req, res) => {

    res.status(200).json(employees);

});


// 2. POST - Add new employee
app.post('/employees', (req, res) => {

    const { name, department, salary } = req.body;

    if (!name || !department || !Number.isFinite(salary) || salary <= 0) {
        return res.status(400).json({
            message: "Invalid employee details"
        });
    }

    const newEmployee = {
        id: nextId++,
        name,
        department,
        salary
    };

    employees.push(newEmployee);

    res.status(201).json({
        message: "Employee added successfully",
        employee: newEmployee
    });

});


// 3. PUT - Update employee details
app.put('/employees/:id', (req, res) => {

    const id = Number(req.params.id);

    const employee = employees.find(emp => emp.id === id);

    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    const { name, department, salary } = req.body;

    if (!name || !department || !Number.isFinite(salary) || salary <= 0) {
        return res.status(400).json({
            message: "Invalid employee details"
        });
    }

    employee.name = name;
    employee.department = department;
    employee.salary = salary;

    res.status(200).json({
        message: "Employee updated successfully",
        employee: employee
    });

});


// 4. DELETE - Delete employee
app.delete('/employees/:id', (req, res) => {

    const id = Number(req.params.id);

    const index = employees.findIndex(emp => emp.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    employees.splice(index, 1);

    res.status(200).json({
        message: "Employee deleted successfully"
    });

});


// Handle invalid routes
app.use((req, res) => {

    res.status(404).json({
        message: "404 - Route not found"
    });

});


// Start server
app.listen(3000, () => {

    console.log("Server running at http://localhost:3000");

});


// Operation 1: GET – Display Employees
// http://localhost:3000/employees


// Operation 2: POST – Add Employee
// http://localhost:3000/employees
// {
//     "name": "Priya",
//     "department": "Finance",
//     "salary": 40000
// }

// Operation 3: PUT – Update Employee
// http://localhost:3000/employees/1
// {
//     "name": "Rahul More",
//     "department": "Development",
//     "salary": 45000
// }

// Operation 4: DELETE – Delete Employee
// http://localhost:3000/employees/2

// Operation 5: GET – Check Updated Records
// http://localhost:3000/employees