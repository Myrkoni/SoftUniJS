function solve(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let food = Number(input[index]);
    index++
    let dogFood = Number(input[index]);
    index++;
    let catFood = Number(input[index]);
    index++;

    let eatingDog = 0;
    let eatingCat = 0;
    let day = 0;
    let gift = 0;

    for (let i = 0; i < days; i++) {
        day++;
        if (day >= 3) {
            gift = gift + (dogFood + catFood) * 0.10;
            day = 0;
        }
        eatingDog += dogFood;
        eatingCat += catFood;
        dogFood = Number(input[index]);
        index++;
        catFood = Number(input[index]);
        index++;
    }
    let totalFoods = eatingCat + eatingDog;
    console.log(`Total eaten biscuits: ${Math.round(gift)}gr.`);
    console.log(`${((totalFoods / food) * 100).toFixed(2) }% of the food has been eaten.`);
    console.log(`${((eatingDog / totalFoods) * 100).toFixed(2)}% eaten from the dog.`);
    console.log(`${((eatingCat / totalFoods) * 100).toFixed(2)}% eaten from the cat.`);
}
solve(["3",
"1000",
"300",
"20",
"100",
"30",
"110",
"40"])