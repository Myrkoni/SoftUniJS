function solve(input) {
    let budget = Number(input[0]);
    let destination = input[1];
    let season = input[2];
    let countDays = Number(input[3]);

    let needMoney = 0;

    if (destination === "Dubai") {
        if (season === "Winter") {
            needMoney = 45000 * countDays;
        } else if (season === "Summer") {
            needMoney = 40000 * countDays;
        }
    } else if (destination === "Sofia") {
        if (season === "Winter") {
            needMoney = 17000 * countDays;
        } else if (season === "Summer") {
            needMoney = 12500 * countDays;
        }
    } else if (destination === "London") {
        if (season === "Winter") {
            needMoney = 24000 * countDays;
        } else if (season === "Summer") {
            needMoney = 20250 * countDays;
        }
    }

    if (destination === "Dubai") {
        needMoney = needMoney * 0.70;
    }
    if (destination === "Sofia") {
        needMoney = needMoney * 1.25;
    }

    if (budget >= needMoney) {
        console.log(`The budget for the movie is enough! We have ${(budget - needMoney).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(needMoney - budget).toFixed(2)} leva more!`);
    }
}
solve(["200000",
"London",
"Summer",
"7"])