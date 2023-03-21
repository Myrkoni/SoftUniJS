function solve(input){
    let budget = Number(input[0]);
    let night = Number(input[1]);
    let priceNight = Number(input[2]);
    let percentAdditional = Number(input[3]);

    if(night > 7){
        priceNight = priceNight * 0.95;
    }
    let totalPrice = night * priceNight + budget * (percentAdditional / 100);

    if(budget >= totalPrice){
        console.log(`Ivanovi will be left with ${(budget - totalPrice).toFixed(2)} leva after vacation.`);
    }else{
        console.log(`${(totalPrice - budget).toFixed(2)} leva needed.`)
    }
}
solve(["500",
"7",
"66",
"15"])