function solve(num1, num2, num3){
    let result = num1 + num2 + num3;
    console.log(result % 1 === 0 ? `${result } - Integer` : `${result } - Float`);
}
solve(9, 100, 1.1)