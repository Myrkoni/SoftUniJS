function solve(input) {
    let index = 0;
    let countStudent = Number(input[index]);
    index++;
    let garde = Number(input[index]);
    index++
    let totalGrade = 0;
    let countTo3 = 0;
    let countTo4 = 0;
    let countTo5 = 0;
    let countTo6 =0; 

    for (let i = 0; i < countStudent; i++) {
        if (garde < 2.99) {
            countTo3++;
        } else if (garde >= 3 && garde <= 3.99) {
            countTo4++;
        } else if (garde >= 4 && garde <= 4.99) {
            countTo5++;
        } else if (garde >= 5) {
            countTo6++;
        }
        totalGrade += garde;
        garde = Number(input[index]);
        index++
    }
    console.log(`Top students: ${((countTo6 / countStudent) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((countTo5 / countStudent) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((countTo4 / countStudent) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((countTo3 / countStudent) * 100).toFixed(2)}%`);
    console.log(`Average: ${(totalGrade / countStudent).toFixed(2)}`);
}
solve([10,
    3.00,
    2.99,
    5.68,
    3.01,
    4,
    4,
    6.00,
    4.50,
    2.44,
    5])