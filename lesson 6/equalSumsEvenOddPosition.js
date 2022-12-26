function solve(input) {
    let firstNumber = Number(input[0]);
    let secondNumber = Number(input[1]);
    let printLine = ``;
    let isPrint = false;
    let currentNumber = "";

    for (let i = firstNumber; i <= secondNumber; i++) {
        currentNumber = `` + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < currentNumber.length; j++) {
            let currentDigit = Number(currentNumber.charAt(j));
            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
            
        }
        if (evenSum === oddSum) {
            printLine += ` ${i}`;
            isPrint = true;
        }
    }
    if (isPrint) {
        console.log(printLine);
    }
}
solve(["100000",

"100050"])