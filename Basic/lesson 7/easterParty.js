function solve(input){
    let guestsCount = Number(input[0]);
    let priceEnvelope = Number(input[1]);
    let budget = Number(input[2]);

    if(guestsCount >= 10 && guestsCount <= 15){
        priceEnvelope *= 0.85;
    }else if(guestsCount > 15 && guestsCount <= 20){
        priceEnvelope *= 0.80;
    }else if(guestsCount > 20){
        priceEnvelope *= 0.75
    }

    let needMoney = (budget * 0.10) + (priceEnvelope * guestsCount);

    if(budget >= needMoney){
        console.log(`It is party time! ${(budget - needMoney).toFixed(2)} leva left.`);
    }else{
        console.log(`No party! ${(needMoney - budget).toFixed(2)} leva needed.`);
    }
}
solve(["18",
"30",
"450"])