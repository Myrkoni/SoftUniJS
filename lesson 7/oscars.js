function solve(input){
    let nameActor = input[0];
    let startPoint = Number(input[1]);
    let countJudge = Number(input[2]);
    let index = 3;

    for(let i = 0; i < countJudge; i++){
        let nameJudge = input[index];
        index++;
        let pointJudge = Number(input[index]);
        index++;

        startPoint += (nameJudge.length * pointJudge) / 2; 
        if(startPoint > 1250.5 ){
            break;
        }
    }
    if(startPoint > 1250.5){
        console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${startPoint.toFixed(1)}!`);
    }else{
        console.log(`Sorry, ${nameActor} you need ${(1250.5 - startPoint).toFixed(1)} more!`);
    }
}
solve(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])