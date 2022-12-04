function solve(input){
    let city = input[0];
    let profit = Number(input[1]);
    let commission = 0;


    switch(city){
        case "Sofia":
            if(profit >= 0 && profit <= 500){
                commission = profit * 0.05;
                console.log(commission.toFixed(2));
            }else if(profit > 500 && profit <= 1000){
                commission = profit * 0.07;
                console.log(commission.toFixed(2));
            }else if(profit > 1000 && profit <= 10000){
                commission = profit *0.08;
                console.log(commission.toFixed(2));
            }else if(profit > 10000){
                commission = profit * 0.12;
                console.log(commission.toFixed(2));
            }else if(profit < 0 ){
                console.log("error")
            }
            break;
        case "Varna":
            if(profit >= 0 && profit <= 500){
                commission = profit * 0.045;
                console.log(commission.toFixed(2));
            }else if(profit > 500 && profit <= 1000){
                commission = profit * 0.075;
                console.log(commission.toFixed(2));
            }else if(profit > 1000 && profit <= 10000){
                commission = profit *0.10;
                console.log(commission.toFixed(2));
            }else if(profit > 10000){
                commission = profit * 0.13;
                console.log(commission.toFixed(2));
            }else if(profit < 0 ){
                console.log("error")
            }
            break;
        case "Plovdiv":
            if(profit >= 0 && profit <= 500){
                commission = profit * 0.055;
                console.log(commission.toFixed(2));
            }else if(profit > 500 && profit <= 1000){
                commission = profit * 0.08;
                console.log(commission.toFixed(2));
            }else if(profit > 1000 && profit <= 10000){
                commission = profit *0.12;
                console.log(commission.toFixed(2));
            }else if(profit > 10000){
                commission = profit * 0.145;
                console.log(commission.toFixed(2));
            }else if(profit < 0 ){
                console.log("error")
            }
            break; 
        default:
            console.log("error");
            break;    
    }
}
solve(["Kaspichan", "-50"])