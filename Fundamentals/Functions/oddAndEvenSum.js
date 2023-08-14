function oddAndEvenSum(number) {
    let stringAtNumber = number.toString();
    let oddSum = 0;
    let evenSum = 0;

    for (let num of stringAtNumber) {
        num = Number(num);
        if (num % 2 === 0) {
            evenSum += num
        } else {
            oddSum += num
        }
    }
    console.log(` Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

oddAndEvenSum(1000435)