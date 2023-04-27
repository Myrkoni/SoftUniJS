function solve(input) {
    let sizeEgg = input[0];
    let colorEgg = input[1];
    let lotsCount = Number(input[2]);

    let totalIncome = 0;

    if (colorEgg === "Red") {
        if (sizeEgg === "Large") {
            totalIncome = lotsCount * 16;
        } else if (sizeEgg === "Medium") {
            totalIncome = lotsCount * 13;
        } else if (sizeEgg === "Small") {
            totalIncome = lotsCount * 9;
        }
    } else if (colorEgg === "Green") {
        if (sizeEgg === "Large") {
            totalIncome = lotsCount * 12;
        } else if (sizeEgg === "Medium") {
            totalIncome = lotsCount * 9;
        } else if (sizeEgg === "Small") {
            totalIncome = lotsCount * 8;
        }
    } else if (colorEgg === "Yellow") {
        if (sizeEgg === "Large") {
            totalIncome = lotsCount * 9;
        } else if (sizeEgg === "Medium") {
            totalIncome = lotsCount * 7;
        } else if (sizeEgg === "Small") {
            totalIncome = lotsCount * 5;
        }
    }
    totalIncome *= 0.65;

    console.log(`${totalIncome.toFixed(2)} leva.`);
}
solve(["Large",
"Red",
"7"])