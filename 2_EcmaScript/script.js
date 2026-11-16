function calculateResult(...marks) {

    let total = 0;

    marks.forEach(mark => {
        total = total + mark;
    });

    let average = total / marks.length;

    let checkResult = (average) => {
        return average >= 35 ? "Pass" : "Fail";
    };

    let result = checkResult(average);

    return `
        Total: ${total}
        Average: ${average}
        Result: ${result}
    `;
}

console.log(calculateResult(80, 70, 60, 90, 85));