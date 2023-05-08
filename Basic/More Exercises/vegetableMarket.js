function solve(input){
    let priceVegetable = Number(input[0]);
    let priceFruit = Number(input[1]);
    let countVegetable = Number(input[2]);
    let countFruit = Number(input[3]);

    let totalPrice = ((priceVegetable * countVegetable) + (priceFruit * countFruit)) / 1.94;
    console.log(totalPrice.toFixed(2)); 
}
solve([0.194,
    19.4,
    10,
    10])