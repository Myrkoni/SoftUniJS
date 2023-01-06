function solve(input) {
    let budget = Number(input[0]);
    let category = input[1];
    let countPeople = Number(input[2]);
    let needMoney = 0;

    if (countPeople < 5) {
        budget = budget * 0.25;
    } else if (countPeople >= 5 && countPeople < 10) {
        budget = budget * 0.40;
    } else if (countPeople >= 10 && countPeople < 25) {
        budget = budget * 0.50;
    } else if (countPeople >= 25 && countPeople < 50) {
        budget = budget * 0.60;
    } else if (countPeople >= 50) {
        budget = budget * 0.75;
    }
    switch (category) {
        case "VIP":
            needMoney = countPeople * 499.99;
            break;
        case "Normal":
            needMoney = countPeople * 249.99;
            break;
    }
    if(budget >= needMoney){
        console.log(`Yes! You have ${(budget - needMoney).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money! You need ${(needMoney - budget).toFixed(2)} leva.`);
    }
}
solve([30000,
    "VIP",
    49])