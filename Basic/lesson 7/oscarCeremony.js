function solve(input){
    let rent = Number(input[0]);

    let statiettes = rent * 0.70;
    let catering = statiettes * 0.85;
    let sound = catering / 2;
    let totalPrice = rent + catering + sound +statiettes;

    console.log(totalPrice.toFixed(2));
}
solve(["5555"])