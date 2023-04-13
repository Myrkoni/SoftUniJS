function solve(input){
    let index = 0;
    let profit = Number(input[index]);
    index++;
    let cocktail = input[index];
    index++;
    let countCocktail = Number(input[index]);
    index++;
    let income = 0;
    let order = 0;

    while(cocktail !== "Party!"){
        order = cocktail.length * countCocktail;
        if(order % 2 !== 0){
            order = order * 0.75;
        }
        income += order;
        cocktail = input[index];
        index++;
        countCocktail = Number(input[index]);
        index++;
        if(income >= profit){
            break;
        }
    }
    if(profit > income){
        console.log(`We need ${(profit - income).toFixed(2)} leva more.`);
    }else{
        console.log("Target acquired.");
    }
    console.log(`Club income - ${income.toFixed(2)} leva.`);
}
solve(["500",
"Bellini",
"6",
"Bamboo",
"7",
"Party!"])