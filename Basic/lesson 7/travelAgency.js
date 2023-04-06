function solve(input) {
    let city = input[0];
    let typePackage = input[1];
    let vip = input[2];
    let countDays = Number(input[3]);
    let price = 0;

    if(countDays > 7){
        countDays -= 1;
    }
    if (city === "Bansko" || city === "Borovets") {
        switch (typePackage) {
            case "noEquipment":
                price = countDays * 80;
                if (vip === "yes") {
                    price = price * 0.95;
                }
                break;
            case "withEquipment":
                price = countDays * 100;
                if (vip === "yes") {
                    price = price * 0.90;
                }
                break;
            default:
                console.log("Invalid input!");
                break;
        }

    } else if (city === "Varna" || city === "Burgas") {
        switch (typePackage) {
            case "noBreakfast":
                price = countDays * 100;
                if (vip === "yes") {
                    price = price * 0.93;
                }
                break;
            case "withBreakfast":
                price = countDays * 130;
                if (vip === "yes") {
                    price = price * 0.88;
                }
                break;
            default:
                console.log("Invalid input!");
                break;

        }

    } else {
        console.log("Invalid input!");
        return;
    }
    if (countDays < 1) {
        console.log("Days must be positive number!");
    } else {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }
}
solve(["Varna",
"withBreakfast",
"yes",
"5"])