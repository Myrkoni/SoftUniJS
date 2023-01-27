function solve(input){
    let persone = Number(input[0]);
    let price = Number(input[1]);
    let lounger = Number(input[2]);
    let umbrella = Number(input[3]);

    let priceUmbrela = Math.ceil(persone / 2 ) * umbrella;
    let priceLounger = Math.ceil(persone * 0.75) * lounger;
    let totalPrice = persone * price + priceUmbrela + priceLounger;
    
    console.log(`${totalPrice.toFixed(2)} lv.`);

}
solve(["50",
"6",
"8",
"4"])