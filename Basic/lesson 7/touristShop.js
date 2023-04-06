function solve(input) {
    let budget = Number(input[0]);
    let nameProduct = input[1];
    let priceProduct = Number(input[2]);
    let index = 3;

    let countProduct = 0;
    let totalPrice = 0;
    let promoProduct = 0;

    while (nameProduct !== "Stop") {
        countProduct++;
        promoProduct++;
        if (promoProduct >= 3) {
            totalPrice += priceProduct / 2
            promoProduct = 0;
        } else {
            totalPrice += priceProduct;
        }
        if (totalPrice > budget) {
            break;
        }
        nameProduct = input[index];
        index++;
        priceProduct = Number(input[index]);
        index++;
    }
    if (totalPrice <= budget) {
        console.log(`You bought ${countProduct} products for ${totalPrice.toFixed(2)} leva.`);
    } else {
        console.log("You don't have enough money!");
        console.log(`You need ${(totalPrice - budget).toFixed(2)} leva!`);
    }
}
solve(["153.20",
    "Backpack",
    "25.20",
    "Shoes",
    "54",
    "Sunglasses",
    "30",
    "Stop"])