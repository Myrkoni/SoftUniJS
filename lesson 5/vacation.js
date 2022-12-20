function solve(input){
    let index = 0;
    let needMoney = Number(input[index]);
    index++
    let coins = Number(input[index]);
    index++
    let spendOrSave = input[index];
    index++
    let sum = Number(input[index]);
    index++
    let day = 0;
    let spend = 0;

    while(coins < needMoney){
        switch(spendOrSave){
            case "spend":
                spend++;
                coins = coins - sum;
                if(coins < 0 ){
                    coins = 0;
                }
                break;
            case "save":
                coins = coins + sum;
                spend = 0;
                break;
        }
        
        day++;
        spendOrSave = input[index];
        sum = Number(input[index + 1]);
        index+=2;
        if(spend === 5 ){
            break;
        }
    }
    if(spend === 5){
        console.log(`You can't save the money.`);
        console.log(`${day}`);
    }else if(coins >= needMoney){
        console.log(`You saved the money for ${day} days.`);
    }
}
solve(["250",

"150",

"spend",

"50",

"spend",

"50",

"save",

"100",

"save",

"100"])