function solve(input){
    let budget = Number(input[0]);
    let season = input[1];

    let classes = "";
    let priceCar = 0;
    let car = "";

    switch (season){
        case "Summer":
            if(budget <= 100){
                classes = "Economy class";
                car = "Cabrio"
                priceCar = budget * 0.35;
            }else if ( budget > 100 && budget <= 500){
                classes = "Compact class";
                car = "Cabrio"
                priceCar = budget * 0.45;
            }else if ( budget > 500){
                classes = "Luxury class";
                car = "Jeep"
                priceCar = budget * 0.90;
            }
            break;
            case "Winter":
                if(budget <= 100){
                    classes = "Economy class";
                    car = "Jeep"
                    priceCar = budget * 0.65;
                }else if ( budget > 100 && budget <= 500){
                    classes = "Compact class";
                    car = "Jeep"
                    priceCar = budget * 0.80;
                }else if ( budget > 500){
                    classes = "Luxury class";
                    car = "Jeep"
                    priceCar = budget * 0.90;
                }
                break; 
    }
    console.log(`${classes}`);
    console.log(`${car} - ${priceCar.toFixed(2)}`);
}
solve([1010,
    "Summer"])