function solve(input){
    let flourPrice = Number(input[0]);
    let kilogramFlour = Number(input[1]);
    let kilogramShugar = Number(input[2]);
    let eggCount = Number(input[3]);
    let packetsYeast = Number(input[4]);

    let shugarPrice = flourPrice * 0.75;
    let eggPrice = flourPrice * 1.10;
    let yeastsPrise = shugarPrice * 0.20;

    let totalPrice = flourPrice * kilogramFlour + kilogramShugar * shugarPrice + eggPrice * eggCount + packetsYeast * yeastsPrise;

    console.log(`${totalPrice.toFixed(2)}`);
}
solve(["50",
"10",
"3.5",
"6",
"1"])