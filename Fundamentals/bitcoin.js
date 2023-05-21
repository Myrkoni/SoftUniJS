function solve(array){
    let bitcoin = 11949.16;
    let gold = 67.51;

    let countBitcoin = 0;
    let countDay = 0;
    let goldSum = 0;
    let usedFirstBitcoin = 0;
    let moneyLeft = 0;
    let isUseBitcoin = true;

    for(let i = 0; i < array.length; i++){
        let goldPerDay = array[i];
        countDay++;
        if(countDay >= 3){
            goldSum += goldPerDay * 0.70;
            countDay = 0;
        }else{
            goldSum += goldPerDay;
        }
        if((goldSum * gold) >= bitcoin && isUseBitcoin ){
            usedFirstBitcoin = i + 1;
            isUseBitcoin = false;
        }

    }
    let totalBitcoin = Math.floor((goldSum  * gold) / bitcoin);
    console.log(`Bought bitcoins: ${totalBitcoin}`);
    if(!isUseBitcoin){
        console.log( `Day of the first purchased bitcoin: ${usedFirstBitcoin}`);
    }
    if(isUseBitcoin){
        console.log(`Left money: ${((goldSum * gold)).toFixed(2)} lv.`);
    }else{
        console.log(`Left money: ${((goldSum * gold) - (totalBitcoin * bitcoin)).toFixed(2)} lv.`);
    }
    
}
solve([3124.15, 504.212, 2511.124])