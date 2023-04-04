function solve(input){
    let priceBaggage = Number(input[0]);
    let kilogramBaggage = Number(input[1]);
    let dayToTravel = Number(input[2]);
    let baggageCount = Number(input[3])

    if(kilogramBaggage < 10){
        priceBaggage *= 0.20;
    }else if(kilogramBaggage >= 10 && kilogramBaggage <= 20) {
        priceBaggage /= 2;
    }

    if(dayToTravel > 30){
        priceBaggage *= 1.10;
    }else if(dayToTravel >= 7 && dayToTravel <= 30){
        priceBaggage *= 1.15;
    }else if(dayToTravel < 7){
        priceBaggage *= 1.40;
    }

    let totalPrice = baggageCount * priceBaggage;

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}
solve(["25.50",
"5",
"36",
"6"])