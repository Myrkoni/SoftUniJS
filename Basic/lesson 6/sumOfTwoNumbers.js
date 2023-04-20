function solve(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let isTrue = false;

    for (i = firstNumber; i <= secondNumber; i++) {
        for (j = firstNumber; j <= secondNumber; j++) {
            counter++;
            if (i + j === magicNumber) {
                isTrue = true;
                break;
            }
        }
        if (isTrue) {
            break;
        }
    }
    if (isTrue !== true) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    } else {
        console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`);
    }

}
solve(["88", "888", "2000"])