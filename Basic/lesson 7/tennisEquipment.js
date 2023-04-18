function solve(input){
    let priceTennisRackets = Number(input[0]);
    let countTennisRackets = Number(input[1]);
    let countSneackers = Number(input[2]);

    let totalPriceRackets = priceTennisRackets * countTennisRackets;
    let totalPriceSneackers = ( priceTennisRackets / 6 ) * countSneackers;
    let moreEquipmetns = ( totalPriceRackets + totalPriceSneackers ) * 0.20;

    let totalPrice = totalPriceRackets + totalPriceSneackers + moreEquipmetns;

    console.log(`Price to be paid by Djokovic ${Math.floor(totalPrice / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(totalPrice * 7 / 8)}`);

}
solve([850,
    4,
    2])