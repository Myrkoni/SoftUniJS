function solve(input){
    let budget = Number(input[0]);
    let index = 1;
    let nameActor = input[index];
    index++;
    let salaryActor = Number(input[index]);
    index++;

    while(nameActor !== "ACTION" ){
        if(nameActor.length > 15){
            budget = budget * 0.80;
            index--;
        }else{
        budget -= salaryActor;
        }
        if(budget < 0){
            break;
        }
        nameActor = input[index];
        index++;
        salaryActor = Number(input[index]);
        index++
    }
    if(budget < 0){
        console.log(`We need ${(Math.abs(budget)).toFixed(2)} leva for our actors.`);
    }else{
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    }
}
solve(["170000",
"Ben Affleck",
"40000.50",
"Zahari Baharov",
"80000",
"Tom Hanks",
"2000.99",
"ACTION"])