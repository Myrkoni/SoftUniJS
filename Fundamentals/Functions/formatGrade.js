function formatGrade(grade) {
    let gradeFormat = "";
    if (grade < 3) {
        gradeFormat = "Fail";
        grade = 2;
    } else if (grade < 3.50) {
        gradeFormat = "Poor";
    } else if (grade < 4.50) {
        gradeFormat = "Good";
    } else if (grade < 5.50) {
        gradeFormat = "Very good";
    } else if (grade <= 6) {
        gradeFormat = "Excellent";
    }
    if (grade === 2) {
        return `${gradeFormat} (${grade})`;
    } else {
        return `${gradeFormat} (${grade.toFixed(2)})`;
    }
}

console.log(formatGrade(4.50))