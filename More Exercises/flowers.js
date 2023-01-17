function solve(input) {
    let chrusanthemum = Number(input[0]);
    let rose = Number(input[1]);
    let tulip = Number(input[2]);
    let sesason = input[3];
    let holiday = input[4];

    let priceBouquet = 0;

    if (sesason === "Spring" || sesason === "Summer") {
        priceBouquet = chrusanthemum * 2.00 + rose * 4.10 + tulip * 2.50;
    } else if (sesason === "Autumn" || sesason === "Winter") {
        priceBouquet = chrusanthemum * 3.75 + rose * 4.50 + tulip * 4.15;
    }
    if (holiday === "Y") {
        priceBouquet = priceBouquet * 1.15;
    }
    if (tulip > 7 && sesason === "Spring") {
        priceBouquet = priceBouquet * 0.95;
    }
    if (rose >= 10 && sesason === "Winter") {
        priceBouquet = priceBouquet * 0.90;
    }
    if ((chrusanthemum + rose + tulip) > 20) {
        priceBouquet = priceBouquet * 0.80;
    }
    priceBouquet = priceBouquet + 2;
    console.log(priceBouquet.toFixed(2));
}
solve([3,
    10,
    9,
    "Winter",
    "N"])