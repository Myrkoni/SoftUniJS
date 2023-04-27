function solve(input) {
    let trainingFee = Number(input[0]);

    let basketballShoes = trainingFee * 0.60;
    let basketballShurt = basketballShoes * 0.80;
    let basketballBall = basketballShurt / 4;
    let basketballAccessories = basketballBall / 5;
    
    let totalPrice =trainingFee + basketballShoes + basketballShurt + basketballBall + basketballAccessories;

    console.log(totalPrice.toFixed(2));

}
solve([320])