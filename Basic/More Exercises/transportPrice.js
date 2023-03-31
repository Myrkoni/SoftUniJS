function solve(input){
    let kilometers = Number(input[0]);
    let dayOrNight = input[1];
    let totalPrice = 0;

    if( kilometers < 20){
        switch (dayOrNight){
            case "day":
            totalPrice = (kilometers * 0.79) + 0.70;
            break;
            case "night" :
                totalPrice = (kilometers * 0.90) + 0.70;
                break;
        }
    }else if( kilometers >= 20 && kilometers < 100){
        totalPrice = kilometers *  0.09;
    } else {
        totalPrice = kilometers * 0.06;
    }
    console.log(totalPrice.toFixed(2));
}
solve(["180", "night"])