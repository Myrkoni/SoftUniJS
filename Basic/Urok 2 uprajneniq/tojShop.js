function solve(input){
    let vacantion = Number(input[0])
    let puzzeleQuantity = Number(input[1]);
    let dollQuantity = Number(input[2]);
    let bearQuantity = Number(input[3]);
    let minionQuantity = Number(input[4]);
    let truckQuantity = Number(input[5]);
    let toysCount = puzzeleQuantity + dollQuantity + bearQuantity + minionQuantity + truckQuantity;
    let totalSum =puzzeleQuantity * 2.60 + dollQuantity * 3 + bearQuantity * 4.10 + minionQuantity * 8.20 + truckQuantity * 2 ;
     if(toysCount >= 50){
        totalSum = totalSum * 0.75;
     }
      let moneyAfterRent = totalSum * 0.9;
      if(moneyAfterRent >= vacantion){
        let moneyLefr = moneyAfterRent - vacantion
        console.log(`Yes! ${moneyLefr.toFixed(2)} lv left.`)
      }else{
        let moneyNeedet = vacantion - moneyAfterRent
        console.log(`Not enough money! ${moneyNeedet.toFixed(2)} lv needed.`)
      }

}
solve(["320", "8", "2", "5", "5", "1"])