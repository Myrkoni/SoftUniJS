function solve(input){
    let budget =  Number(input[0]);
    let videoCardQuantity = Number(input[1]);
    let procesorsQuantity = Number(input[2]);
    let ramQuantity = Number(input[3]);

    let totalPriceVideoCards = videoCardQuantity * 250;
    let totalProcesors = totalPriceVideoCards * 0.35;
    let totalRam = totalPriceVideoCards * 0.1;
    let totalPraice = totalPriceVideoCards + totalProcesors * procesorsQuantity + totalRam * ramQuantity;

    if(videoCardQuantity > procesorsQuantity){
        totalPraice =totalPraice * 0.85
    } 
    if(budget >= totalPraice){
        let moneyLeft= budget - totalPraice;
        console.log(`You have ${moneyLeft.toFixed(2)} leva left!`)
    }else {
        let moneyNeeded = totalPraice - budget;
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`);
    }
}
solve(["900",

"2",

"1",

"3"])