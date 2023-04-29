function braceletStand(input){
    let pocketMoney = Number(input[0]);
    let moneyPerDay = Number(input[1]);
    let expense = Number(input[2]);
    let priceGift = Number(input[3]);

    let totalMoney = (pocketMoney * 5) + (moneyPerDay * 5) - expense;
    if(priceGift <= totalMoney){
        console.log(`Profit: ${totalMoney.toFixed(2)} BGN, the gift has been purchased.`);
    }else{
        console.log(`Insufficient money: ${(priceGift - totalMoney).toFixed(2)} BGN.`);
    }

}
braceletStand(["5.12",
"32.05",
"15",
"150"])