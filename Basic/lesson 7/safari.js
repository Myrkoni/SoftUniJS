function solve(input){
    let budget = Number(input[0]);
    let litersFuel = Number(input[1]);
    let day = input[2];

    let needMoney = litersFuel * 2.10 + 100;
    if(day === "Saturday"){
        needMoney = needMoney * 0.90;
    }else if(day === "Sunday"){
        needMoney = needMoney * 0.80;
    }

    if(budget >= needMoney){
        console.log(`Safari time! Money left: ${(budget - needMoney).toFixed(2)} lv. `);
    }else{
        console.log(`Not enough money! Money needed: ${(needMoney - budget).toFixed(2)} lv.`)
    }
}
solve(["120",
"30",
"Saturday"])