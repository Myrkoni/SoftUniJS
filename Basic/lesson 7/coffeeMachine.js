function solve(input) {
    let drink = input[0];
    let sugar = input[1];
    let countDrinks = Number(input[2]);
    let price = 0;

    if (drink === "Espresso") {
        switch (sugar) {
            case "Without":
                price = (countDrinks * 0.9) * 0.65;
                break;
            case "Normal":
                price = countDrinks * 1;
                break;
            case "Extra":
                price = countDrinks * 1.20;
                break;
        }
    } else if (drink === "Cappuccino") {
        switch (sugar) {
            case "Without":
                price = (countDrinks * 1) * 0.65;
                break;
            case "Normal":
                price = countDrinks * 1.2;
                break;
            case "Extra":
                price = countDrinks * 1.60;
                break;
        }
    } else if (drink === "Tea") {
        switch (sugar) {
            case "Without":
                price = (countDrinks * 0.50) * 0.65;
                break;
            case "Normal":
                price = countDrinks * 0.60;
                break;
            case "Extra":
                price = countDrinks * 0.70;
                break;
        }
    }
    if(drink === "Espresso" && countDrinks >= 5){
        price = price * 0.75;
    }
    if(price > 15){
        price = price * 0.80;
    }
    console.log(`You bought ${countDrinks} cups of ${drink} for ${price.toFixed(2)} lv.`);
}
solve(["Cappuccino",
"Normal",
"13"])