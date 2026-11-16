const fs = require('fs');

// Read employee details from file
fs.readFile('employees.txt', 'utf8', (err, data) => {

    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    // Split employee records
    const employees = data.trim().split('\n');

    let report = "Employee Salary Report\n\n";

    employees.forEach((employee) => {

        const [name, department, salary] = employee.split(',');

        const basicSalary = Number(salary);

        // Calculate 10% bonus
        const bonus = basicSalary * 0.10;

        // Calculate net salary
        const netSalary = basicSalary + bonus;

        report += `Name: ${name}\n`;
        report += `Department: ${department}\n`;
        report += `Basic Salary: ${basicSalary}\n`;
        report += `Bonus: ${bonus}\n`;
        report += `Net Salary: ${netSalary}\n\n`;
    });

    // Write updated report into new file
    fs.writeFile('salary_report.txt', report, (err) => {

        if (err) {
            console.log("Error writing file:", err);
            return;
        }

        console.log("Salary report generated successfully!");
    });
});