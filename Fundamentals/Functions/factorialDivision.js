function factorialDivision(firstNumber, secondNumber){
    let sum1 = firstNumber;
    let sum2 = secondNumber;

    for(let i = firstNumber - 1; i > 0; i--){
        sum1 *= i;
    }
    for(let i = secondNumber - 1; i > 0; i--){
        sum2 *= i;
    }
    let result = (sum1 / sum2).toFixed(2);
    return result;

}

console.log(factorialDivision(5, 2))