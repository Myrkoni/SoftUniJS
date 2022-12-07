function solve(input){
    let age = Number(input[0]);
    let priceWashing = Number(input[1]);
    let priceToy = Number(input[2]);

    let totalSaveMoney = 0;
    let money = 10;

    for(i = 1; i <= age; i++ ){
        
        if(i % 2 === 0){
            
            totalSaveMoney = totalSaveMoney + (money - 1)
            money = money + 10;
        }else{
            totalSaveMoney = totalSaveMoney + priceToy
        }
    }
    if(totalSaveMoney >= priceWashing){
        console.log(`Yes! ${(totalSaveMoney - priceWashing).toFixed(2)}`);
    }else{
        console.log(`No! ${(priceWashing - totalSaveMoney).toFixed(2)}`);
    }

}
solve(["21",

"1570.98",

"3"])