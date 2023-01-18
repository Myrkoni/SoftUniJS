function solve(input){
    let fuel = input[0];
    let liters = Number(input[1]);

    switch (fuel){
        case "Diesel":
            if( liters < 25){;
                console.log(`Fill your tank with diesel!`)
            }else {
                console.log(`You have enough diesel.`);
            }
            break;
        case "Gasoline":
            if( liters < 25){;
                console.log(`Fill your tank with gasoline!`)
            }else {
                console.log(`You have enough gasoline.`);
            }
            break;
        case "Gas":
            if( liters < 25){;
                console.log(`Fill your tank with gas!`);
            }else {
                console.log(`You have enough gas.`);
            }
            break;
        default:
            console.log("Invalid fuel!");
            break;

    }
}
solve(["Kerosene",
    200])