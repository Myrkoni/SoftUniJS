function solve(input){
    let index = 0;
    let judgeCount = Number(input[index]);
    index++;
    let presentation = input[index];
    index++;
    let assesssment = Number(input[index]);
    index++

    let countPresents = 0;
    let totalAssessment = 0;
    let midAssessment = 0;

    while ( presentation !== "Finish"){
        for ( let i = 0; i < judgeCount; i++){
            midAssessment += assesssment;
            assesssment = Number(input[index]);
            index++;
        }
        midAssessment = midAssessment / judgeCount
        console.log(`${presentation} - ${midAssessment.toFixed(2)}.`);
        countPresents++;
        totalAssessment += midAssessment
        presentation = input[index-1];
        assesssment = Number(input[index]);
        index++;
        midAssessment = 0;
      
    }
    console.log(`Student's final assessment is ${(totalAssessment / countPresents).toFixed(2)}.`)
}
solve(["3",

"Arrays",

"4.53",

"5.23",

"5.00",

"Lists",

"5.83",

"6.00",

"5.42",

"Finish"])