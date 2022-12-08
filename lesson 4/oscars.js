function solve(input){
    let nameActor = input[0];
    let pointOfAcademy = Number(input[1]);
    let countJudge = Number(input[2]);


    for(i = 3; i < input.length; i +=2){
        let nameJudge = input[i];
        let pointJudge = Number(input[i + 1]);

        pointOfAcademy = pointOfAcademy + (pointJudge * nameJudge.length)/2

        if(pointOfAcademy > 1250.5){
            console.log(`Congratulations, ${nameActor} got a nominee for leading role with ${pointOfAcademy.toFixed(1)}!`);
            return;
        }
    }
    console.log(`Sorry, ${nameActor} you need ${(1250.5 - pointOfAcademy).toFixed(1)} more!`)
}
solve(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])