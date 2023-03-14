function solve(input) {
    let number = Number(input[0]);
    let result = "";
    let symbol = "";

    for (let i = 1; i <= number; i++) {
        if (i <= Math.floor((number + 1) / 2)) {
            if (number % 2 === 0) {
                symbol = "-".repeat((number / 2) - i);
                result = "*".repeat(i * 2);
            }else{
                symbol = "-".repeat(((number + 1) / 2) - i);
                result = "*".repeat((i * 2 ) - 1);
            }
            console.log(`${symbol}${result}${symbol}`);
            result = "";
            symbol = "";


        } else {
            for (let j = 1; j <= number; j++) {
                if (j === 1 || j === number) {
                    result += "|";
                } else {
                    result += "*";
                }
            }
            console.log(result);
            result = "";
        }
    }
}
solve([7]);