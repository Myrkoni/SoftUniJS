function solve(input){
    let index = 0;
    let food = Number(input[index]);
    index++;
    let eatingFood = input[index];

    food = food * 1000;

    while(eatingFood !== "Adopted"){
        eatingFood = Number(input[index]);
        food = food - eatingFood;
        index++;
        eatingFood = input[index];
    }
    if(food >= 0){
        console.log(`Food is enough! Leftovers: ${food} grams.`);
    }else{
        console.log(`Food is not enough. You need ${Math.abs(food)} grams more.`);
    }
}
solve(["2",
"999",
"456",
"999",
"999",
"123",
"456",
"Adopted"])