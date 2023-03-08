function solve(input){
    let minutes = Number(input[0]);
    let countWalks = Number(input[1]);
    let calories = Number(input[2]);

    let totalCalories = minutes * countWalks * 5;

    if( calories / 2 <= totalCalories ){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCalories}.`);
    }else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCalories}.`);

    }
}
solve([15,2,500])