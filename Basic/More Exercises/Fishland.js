function solve(input){
    let mackerelPrice = Number(input[0]);
    let tsatsaPrice = Number(input[1]);
    let palamudCount = Number(input[2]);
    let safridCount = Number(input[3]);
    let musselsCount = Number(input[4]);

    let palamudPrice = mackerelPrice * 1.6;
    let safridPrice = tsatsaPrice * 1.80;
    let musselsPrice = 7.50;
    
    let totalPrice = palamudCount * palamudPrice + safridCount * safridPrice + musselsCount * musselsPrice;

    console.log(totalPrice.toFixed(2));

}
solve([5.55,
    3.57,
    4.3,
    3.6,
    7])