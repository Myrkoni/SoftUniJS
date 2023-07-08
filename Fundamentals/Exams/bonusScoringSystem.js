function bonusScoringSystem(input){
    let studentsCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let additionalBonus = Number(input.shift());

    let maxBonusPoint = 0;
    let studentAttendances = 0;

    for(let i = 0; i < studentsCount; i++){
        let totalPoints = 0;
        totalPoints = input[i] / (lecturesCount) * (5 + additionalBonus);
        
        if(totalPoints > maxBonusPoint){
            maxBonusPoint = totalPoints;
            studentAttendances = input[i];
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonusPoint)}.`);
    console.log(`The student has attended ${studentAttendances} lectures.`);

}
bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ])