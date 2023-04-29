function solve(input) {
    let badGrades = Number(input[0]);
    let subject = input[1];
    let assessment = Number(input[2]);
    let index = 3;
    let badassassmet = 0;
    let averageScore = 0;
    let numberOfProblems = 0;
    let lastProblem = "";

    while (subject !== "Enough") {
        if (assessment <= 4) {
            badassassmet++;
            if (badassassmet === badGrades) {
                console.log(`You need a break, ${badGrades} poor grades.`);
                break;
            }
        }
        lastProblem = subject;
        averageScore = averageScore + assessment;
        numberOfProblems++;
        subject = input[index];
        assessment = Number(input[index + 1]);
        index += 2;

    }
    if (badassassmet !== badGrades) {
        console.log(`Average score: ${(averageScore / numberOfProblems).toFixed(2)}`);
        console.log(`Number of problems: ${numberOfProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    }
}
solve(["3",

    "Money",

    "6",

    "Story",

    "4",

    "Spring Time",

    "5",

    "Bus",

    "6",

    "Enough"])