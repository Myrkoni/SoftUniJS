function solve(input){
    let budget = Number(input[0]);
    let season = input[1];

    let location = "";
    let placeToStay = "";
    let price = 0;

    if ( budget <= 1000){
        placeToStay = "Camp";
        switch (season){
            case "Summer":
                location = "Alaska";
                price = budget * 0.65;
                break;
            case "Winter":
                location = "Morocco";
                price = budget * 0.45;
                break;
        }
    }else if ( budget > 1000 && budget <= 3000){
        placeToStay = "Hut";
        switch (season){
            case "Summer":
                location = "Alaska";
                price = budget * 0.80;
                break;
            case "Winter":
                location = "Morocco";
                price = budget * 0.60;
                break;
        }
    }else if ( budget > 3000){
        placeToStay = "Hotel";
        switch (season){
            case "Summer":
                location = "Alaska";
                price = budget * 0.90;
                break;
            case "Winter":
                location = "Morocco";
                price = budget * 0.90;
                break;
        }
    }
    console.log(`${location} - ${placeToStay} - ${price.toFixed(2)}`)
}
solve([799.50,
    "Winter"])