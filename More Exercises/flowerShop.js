function solve(input){
    let magnoliaCount = Number(input[0]);
    let hyacinthCount = Number(input[1]);
    let roseCount = Number(input[2]);
    let cactusCount = Number(input[3]);
    let priceGift = Number(input[4]);

    let total = ((magnoliaCount * 3.25) + (hyacinthCount * 4) + (roseCount * 3.50) + (cactusCount * 8)) * 0.95;
    if( total >= priceGift){
        console.log(`She is left with ${Math.floor(total - priceGift)} leva.`);
    }else {
        console.log(`She will have to borrow ${Math.ceil(priceGift - total)} leva.`);
    }
}
solve([15,
    7,
    5,
    10,
    100])