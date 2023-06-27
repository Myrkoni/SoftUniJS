function schoolGrades(input) {
    let student = {};

    for (let el of input) {
        let tokens = el.split(" ");
        let name = tokens.shift();

        if (student.hasOwnProperty(name)) {
            for (let el of tokens) {
                student[name].push(el);
            }
        } else {
            student[name] = tokens;
        }
    }

    let sortStudent = Object.keys(student).sort((a, b) => a.localeCompare(b));

    for (let key of sortStudent) {
        let avgGrade = 0;
        for (let grade of student[key]) {
            avgGrade += Number(grade);
        }
        console.log(`${key}: ${(avgGrade / student[key].length).toFixed(2)}`);
    }
}

schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])