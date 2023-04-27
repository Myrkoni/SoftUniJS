function solve(priceStrawberries, countBanan, countOrange, countRaspberries, countStrawberries){
   // let priceStrawberries = Number(input[0]);
   // let countBanan = Number(input[1]);
   // let countOrange = Number(input[2]);
   // let countRaspberries = Number(input[3]);
   // let countStrawberries = Number(input[4]);

    let priceRaspbarries = priceStrawberries / 2;
    let priceOrage = priceRaspbarries * 0.60;
    let priceBanana = priceRaspbarries * 0.20;

    let needMoney = priceStrawberries * countStrawberries + priceBanana * countBanan + priceOrage * countOrange + priceRaspbarries * countRaspberries;

    console.log(`${needMoney.toFixed(2)}`);

}
solve(48,
    10,
    3.3,
    6.5,
    1.7)