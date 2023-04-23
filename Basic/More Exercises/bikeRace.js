function solve(input){
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let track = input[2];

    let total = 0;

    switch (track){
        case "trail":
            total = juniors * 5.50 + seniors * 7;
            break
        case "cross-country":
            total = juniors * 8 + seniors * 9.50;
            if((juniors + seniors) >= 50 ){
                total = total * 0.75;
            }
            break;
        case "downhill":
            total = juniors * 12.25 + seniors * 13.75;
            break;
        case "road":
            total = juniors * 20 + seniors * 21.50;
            break;
    }
    total = total * 0.95;
    console.log(total.toFixed(2));
}
solve([21,
    26,
    "cross-country"])