function schoolRegister(data) {
    let register = {};

    for(let el of data){
        let [strName, strGrade, strScore] = el.split(', ');
        let nameStudent = strName.split(' ').slice(-1).join('');
        let gradeStudent = strGrade.split(' ').slice(-1).join('');
        let scoreStudent = strScore.split(' ').slice(-1).join('');

        if(scoreStudent >= 3){
            if(!register.hasOwnProperty(gradeStudent)){
                register[gradeStudent] = {
                    name : [],
                    score: [],
                }
            }
            if(register.hasOwnProperty(gradeStudent)){
                register[gradeStudent].name.push(nameStudent);
                register[gradeStudent].score.push(scoreStudent);
            }
        }
        
    }
    let sortGrade = Object.keys(register).sort((a, b) => a - b);
    
    for(let el of sortGrade){
        let avrScore = (register[el].score.reduce((a, b) => Number(a) + Number(b), 0)) / register[el].name.length;
        console.log(`${Number(el) + 1} Grade`);
        console.log(`List of students: ${register[el].name.join(', ')}`);
        console.log(`Average annual score from last year: ${avrScore.toFixed(2)}`);
        console.log('');
    }
}
schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
])