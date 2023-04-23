function solve(input) {
    index = 0;
    let preparation = Number(input[index]);
    index++;
    let utensils = input[index];

    let countDishes = 0;
    let countPots = 0;
    let countWashing = 0;
    let availablePreparation = preparation * 750;
    let morePreparation = false;

    while (utensils !== "End") {
        countWashing++;
        utensils = Number(input[index]);
        if (countWashing < 3) {
            countDishes += utensils;
            availablePreparation = availablePreparation - utensils * 5;
        } else {
            countPots += utensils;
            availablePreparation = availablePreparation - utensils * 15;
            countWashing = 0;
        }
        if (availablePreparation < 0) {

            morePreparation = true;
            break;
        }
        index++;
        utensils = input[index];
        

    }
    if (morePreparation) {
        console.log(`Not enough detergent, ${Math.abs(availablePreparation)} ml. more necessary!`);
    } else {
        console.log("Detergent was enough!");
        console.log(`${countDishes} dishes and ${countPots} pots were washed.`);
        console.log(`Leftover detergent ${availablePreparation} ml.`)
    }
}
solve([2,
    53,
    65,
    55,
    "End"
    ])