function solve(input) {
    let sum = Number(input[0]);
    let sex = input[1];
    let age = Number(input[2]);
    let sport = input[3];

    let needSum = 0;

    switch (sport) {
        case "Gym":
            if (sex === "m") {
                needSum = 42;
            } else {
                needSum = 35;
            }
            break;
        case "Boxing":
            if (sex === "m") {
                needSum = 41;
            } else {
                needSum = 37;
            }
            break;
        case "Yoga":
            if (sex === "m") {
                needSum = 45;
            } else {
                needSum = 42;
            }
            break;
        case "Zumba":
            if (sex === "m") {
                needSum = 34;
            } else {
                needSum = 31;
            }
            break;
        case "Dances":
            if (sex === "m") {
                needSum = 51;
            } else {
                needSum = 53;
            }
            break;
        case "Pilates":
            if (sex === "m") {
                needSum = 39;
            } else {
                needSum = 37;
            }
            break;
    }
    if (age <= 19) {
        needSum = needSum * 0.80;
    }
    if (sum > needSum) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        console.log(`You don't have enough money! You need $${(needSum - sum).toFixed(2)} more.`);
    }
}
solve(["10",
"m",
"50",
"Pilates"])