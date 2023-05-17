function solve(input){
    let budget = Number(input[0]);
    let statist= Number(input[1]);
    let priceClothing = Number(input[2]);
    let decor = budget * 0.1;
    let sumPriceClothing = priceClothing * statist;
    if(statist > 150){
        sumPriceClothing = sumPriceClothing * 0.9;
    }
    totalSum = decor + sumPriceClothing;
    if(totalSum > budget){
        console.log("Not enough money!");
        let moneyNeedet = totalSum - budget;
        console.log(`Wingard needs ${moneyNeedet.toFixed(2)} leva more.`)
    }else{
        console.log("Action!");
        let moneyLeft = budget - totalSum;
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    }

}
solve(["15437.62",

"186",

"57.99"])