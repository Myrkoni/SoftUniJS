function solve(input){
    let days = Number(input[0]);
    let foodLeft = Number(input[1]);
    let dogFood = Number(input[2]);
    let catFood = Number(input[3]);
    let turtleFood= Number(input[4]);

    let neededFoodDog = days * dogFood;
    let neededFoodCat = days * catFood;
    let neededFoodTurtle = days * (turtleFood / 1000);

    let totalNeededFood = neededFoodDog + neededFoodCat + neededFoodTurtle;

    if(foodLeft > totalNeededFood){
        console.log(`${Math.floor(foodLeft - totalNeededFood)} kilos of food left.`);
    }else { 
        console.log(`${Math.ceil(totalNeededFood - foodLeft)} more kilos of food are needed.`)
    }
}
solve([5,
    10,
    2.1,
    0.8,
    321])