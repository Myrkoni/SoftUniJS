function solve(input) {
    let quantityEgg = Number(input[0])
    let index = 1;
    let comand = input[index];
    index++;
    let eggCount = Number(input[index]);
    index++;

    let buyEgg = 0;
    let noEgg = false;

    while (comand != "Close") {
        if (quantityEgg < eggCount && comand === "Buy") {
            noEgg = true;
            break;
        }

        if (comand === "Buy") {
            quantityEgg -= eggCount;
            buyEgg += eggCount;
        } else {
            quantityEgg += eggCount;
        }

        comand = input[index];
        index++;
        eggCount = Number(input[index]);
        index++;
    }

    if (noEgg) {
        console.log(`Not enough eggs in store!`);
        console.log(`You can buy only ${quantityEgg}.`);
    } else {
        console.log(`Store is closed!`);
        console.log(`${buyEgg} eggs sold.`);
    }
}
solve(["20",
    "Fill",
    "30",
    "Buy",
    "15",
    "Buy",
    "20",
    "Close"])