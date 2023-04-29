function catDiet(input){
    let percentFats = Number(input[0]);
    let percentProtein = Number(input[1]);
    let percentCarbohydrates = Number(input[2]);
    let countCalories = Number(input[3]);
    let percentWater = Number(input[4]);

    let gramFats = (countCalories * (percentFats / 100)) / 9;
    let gramProtein = (countCalories * (percentProtein / 100)) / 4;
    let gramCarbohydrates = ( countCalories * (percentCarbohydrates / 100)) / 4;
    
    let totalGrams = gramFats + gramProtein + gramCarbohydrates;
    let caloriesGram = countCalories / totalGrams;

    let totalCalories = caloriesGram * ((100 - percentWater) / 100);

    console.log(totalCalories.toFixed(4));
    
}
catDiet(["60",
"25",
"15",
"2500",
"60"])