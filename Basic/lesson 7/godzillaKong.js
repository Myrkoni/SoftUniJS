function solve(input) {
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let priceClothing = Number(input[2]);

    let decor = budget * 0.10;

    if (extras > 150) {
        priceClothing = priceClothing * 0.90;
    }

    let needMoney = priceClothing * extras + decor;

    if (budget >= needMoney) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - needMoney).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(` Wingard needs ${(needMoney - budget).toFixed(2)} leva more.`);
    }
}
solve(["9587.88",
    "222",
    "55.68"])