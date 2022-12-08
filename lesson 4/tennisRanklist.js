function solve(input){
    let countTournament = Number(input[0]);
    let startingPoint = Number(input[1]);
    let point = 0;
    point = point + startingPoint;
    let winTournament = 0;
    
    for(i = 2; i <= countTournament + 2; i++){
        let stageOfTournament = input[i];
        switch(stageOfTournament){
            case "W":
                point = point+ 2000;
                winTournament++;
                break;
                case "F":
                    point = point + 1200;
                    break;
                    case "SF":
                        point = point + 720;
        }
    }
    console.log(`Final points: ${point}`);
    console.log(`Average points: ${Math.floor((point - startingPoint)/ countTournament)}`);
    console.log(`${((winTournament / countTournament) * 100).toFixed(2)}%`);
}
solve(["5",

"1400",

"F",

"SF",

"W",

"W",

"SF"])