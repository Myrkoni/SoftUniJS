function solve(input){
    let degrees = Number(input[0]);

    if(degrees >= 26 && degrees <= 35){
        console.log("Hot");
    }else if(degrees < 26 && degrees > 20){
        console.log("Warm");
    }else if(degrees >= 15 && degrees <= 20){
        console.log("Mild");
    }else if(degrees >= 12 && degrees < 15){
        console.log("Cool");
    }else if(degrees < 12 && degrees >= 5){
        console.log("Cold");
    }else{
        console.log("unknown");
    }

}
solve([16.5])