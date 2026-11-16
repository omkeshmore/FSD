const fs = require('fs');

// Read JSON file
fs.readFile('students.json', 'utf8', (err, data) => {

    if (err) {
        console.log("Error reading file:", err);
        return;
    }

    const students = JSON.parse(data).students;

    let topper = null;
    let highestTotal = 0;

    let failedStudents = [];

    let subjectHighest = {};

    console.log("===== STUDENT REPORT =====\n");

    students.forEach(student => {

        const marks = Object.values(student.marks);

        // Calculate total
        const total = marks.reduce((sum, mark) => sum + mark, 0);

        // Calculate percentage
        const percentage = total / marks.length;

        // Calculate grade
        let grade;

        if (percentage >= 90)
            grade = "A+";
        else if (percentage >= 80)
            grade = "A";
        else if (percentage >= 70)
            grade = "B";
        else if (percentage >= 60)
            grade = "C";
        else if (percentage >= 35)
            grade = "D";
        else
            grade = "F";

        // Display student report
        console.log("Name:", student.name);
        console.log("Total:", total);
        console.log("Percentage:", percentage.toFixed(2) + "%");
        console.log("Grade:", grade);

        // Find class topper
        if (total > highestTotal) {
            highestTotal = total;
            topper = student.name;
        }

        // Find failed students
        if (marks.some(mark => mark < 35)) {
            failedStudents.push(student.name);
        }

        // Find subject-wise highest marks
        for (let subject in student.marks) {

            if (
                subjectHighest[subject] === undefined ||
                student.marks[subject] > subjectHighest[subject].marks
            ) {
                subjectHighest[subject] = {
                    name: student.name,
                    marks: student.marks[subject]
                };
            }
        }

        console.log("----------------------");
    });

    // Display class topper
    console.log("\nClass Topper:", topper);
    console.log("Highest Total:", highestTotal);

    // Display subject-wise highest marks
    console.log("\n===== SUBJECT-WISE HIGHEST =====");

    for (let subject in subjectHighest) {
        console.log(
            subject + ": " +
            subjectHighest[subject].marks +
            " (" + subjectHighest[subject].name + ")"
        );
    }

    // Display failed students
    console.log("\n===== FAILED STUDENTS =====");

    console.log(
        failedStudents.length > 0
            ? failedStudents.join(", ")
            : "No failed students"
    );

});