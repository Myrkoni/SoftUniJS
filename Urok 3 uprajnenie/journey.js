function solve(input){
    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let needMoney = 0;
    let nightHouse = "";

    if(budget <= 100){
        destination = "Bulgaria";
        if(season === "summer"){
            needMoney = budget * 0.70;
        }else if(season === "winter"){
            needMoney = budget * 0.30;
        }
    }else if(budget <= 1000){
        destination = "Balkans";
        if(season === "summer"){
            needMoney = budget * 0.60;
        }else if(season === "winter"){
            needMoney = budget * 0.20;
        }
    }else{
        destination = "Europe";
        needMoney = budget * 0.10;
    }
    if(season === "summer" && destination !== "Europe"){
        nightHouse = "Camp"
    }else if(season === "winter"){
        nightHouse = "Hotel";
    }else if(destination === "Europe"){
        nightHouse = "Hotel";
    }
   console.log(`Somewhere in ${destination}`);
   console.log(`${nightHouse} - ${(budget-needMoney).toFixed(2)}`);
}
solve(["1500", "summer"])