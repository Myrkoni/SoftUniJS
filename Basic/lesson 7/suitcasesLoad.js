function solve(input){
    let index = 0;
    let volum = Number(input[index]);
    index++;
    let volumSuitcase = input[index];
    let countSuitcase = 0;
    let full = false;
    let suitcases = 0;

    while(volumSuitcase !== "End" ){
        volumSuitcase = Number(input[index]);
        suitcases++;
        if(suitcases >= 3){
            volumSuitcase = volumSuitcase * 1.10;
            suitcases = 0;
        }
        volum = volum - volumSuitcase;
        if(volum <= 0){
            full = true;
            break;
        }
        countSuitcase++;
        index++;
        volumSuitcase = input[index];
    }
    if(full){
        console.log("No more space!");
    }else{
        console.log("Congratulations! All suitcases are loaded!");
    }
    console.log(`Statistic: ${countSuitcase} suitcases loaded.`);
}
solve(["550",
"100",
"252",
"72",
"End"])