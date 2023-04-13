function solve(input) {
    let contract = input[0];
    let type = input[1];
    let internet = input[2]
    let countMonth = Number(input[3]);

    let price = 0;

    if (contract === "one") {
        switch (type) {
            case "Small":
                price = 9.98;
                break;
            case "Middle":
                price = 18.99;
                break;
            case "Large":
                price = 25.98;
                break;
            case "ExtraLarge":
                price = 35.99;
                break;
        }
    } else if (contract === "two") {
        switch (type) {
            case "Small":
                price = 8.58;
                break;
            case "Middle":
                price = 17.09;
                break;
            case "Large":
                price = 23.59;
                break;
            case "ExtraLarge":
                price = 31.79;
                break;
        }
    }
    if(internet === "yes"){
        if(price <= 10){
            price += 5.50;
        }else if(price <= 30){
            price += 4.35;
        }else if(price > 30){
            price += 3.85;
        }
    }
    if(contract === "two"){
        price = price * ((100 - 3.75) / 100);
    }
    price = price * countMonth;
    console.log(`${price.toFixed(2)} lv.`);
}
solve(["two",
"Large",
"no",
"10"])