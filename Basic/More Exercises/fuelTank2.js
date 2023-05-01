function solve(input){
    let fuel = input[0];
    let liters = Number(input[1]);
    let clubCard = input[2];
    let priceLiter = 0;
    let totalPrice = 0;

    switch (fuel){
        case "Gas":
            if(clubCard === "Yes"){
                totalPrice = 0.85 * liters;
            }else{
                totalPrice = 0.93 * liters;
            }
            break;
        case "Gasoline":
            if(clubCard === "Yes"){
                totalPrice = 2.04 * liters;
            }else{
                totalPrice = 2.22 * liters;
            }
            break;
        case "Diesel":
            if(clubCard === "Yes"){
                totalPrice = 2.21 * liters;
            }else{
                totalPrice = 2.33 * liters;
            }
            break;
    }
    if(liters >= 20 && liters <= 25){
        totalPrice = totalPrice * 0.92;
    }else if(liters > 25){
        totalPrice = totalPrice * 0.90;
    }
    console.log(`${totalPrice.toFixed(2)} lv.`);
}
solve(["Gasoline",
    25,
    "No"])