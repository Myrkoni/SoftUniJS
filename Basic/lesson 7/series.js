function solve(input) {
    let budget = Number(input[0]);
    let countSerias = Number(input[1]);
    let index = 2;

    let needMoney = 0;

    for (let i = 0; i < countSerias; i++) {
        let nameMovie = input[index];
        index++;
        let priceMovie = Number(input[index]);
        index++;

        if (nameMovie === "Thrones") {
            needMoney += priceMovie * 0.50;
        } else if (nameMovie === "Lucifer") {
            needMoney += priceMovie * 0.60;
        } else if (nameMovie === "Protector") {
            needMoney += priceMovie * 0.70;
        } else if (nameMovie === "TotalDrama") {
            needMoney += priceMovie * 0.80;
        } else if (nameMovie === "Area") {
            needMoney += priceMovie * 0.90;
        } else {
            needMoney += priceMovie;
        }
    }
    if (budget >= needMoney) {
        console.log(`You bought all the series and left with ${(budget - needMoney).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(needMoney - budget).toFixed(2)} lv. more to buy the series!`);
    }
}
solve(["25",
    "6",
    "Teen Wolf",
    "8",
    "Protector",
    "5",
    "TotalDrama",
    "5",
    "Area",
    "4",
    "Thrones",
    "5",
    "Lucifer",
    "9"])