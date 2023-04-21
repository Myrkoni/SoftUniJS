function solve(input){
    let countTournament = Number(input[0]);
    let startingPoints = Number(input[1]);

    let countWinner = 0;
    let totalPoints = startingPoints;

    for(let i = 2; i < countTournament + 2; i++ ){
        let finishTournament = input[i];

        switch (finishTournament){
            case "W":
                countWinner++;
                totalPoints += 2000;
                break;
            case "F":
                totalPoints += 1200;
                break;
            case "SF":
                totalPoints += 720;
                break;
        }
    }

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor((totalPoints - startingPoints) / countTournament)}`);
    console.log(`${((countWinner / countTournament) * 100).toFixed(2)}%`);
}
solve(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])