function solve(input) {
    let index = 0;
    let sum = input[index];
    index++
    let totalSum = 0;
    while (sum !== "NoMoreMoney") {
        let amount = Number(sum);
        if (sum < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${amount.toFixed(2)}`);
        totalSum = totalSum + amount;
        sum = input[index];
        index++
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);

}
solve(["5.51",

    "69.42",

    "100",

    "NoMoreMoney"])