function solve(input) {
    let guestsCount = Number(input[0]);
    let budget = Number(input[1]);

    let needMoney = (Math.ceil(guestsCount / 3)) * 4 + (guestsCount * 2) * 0.45;

    if(needMoney <= budget){
        console.log(`Lyubo bought ${Math.ceil(guestsCount / 3)} Easter bread and ${guestsCount * 2} eggs.`);
        console.log(`He has ${(budget - needMoney).toFixed(2)} lv. left.`);
    }else{
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${(needMoney - budget).toFixed(2)} lv. more.`);
    }
}
solve(["9",
"12"])