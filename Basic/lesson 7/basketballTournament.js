function solve(input) {
    let tounamentName = input[0];

    let winCount = 0;
    let lostCount = 0;
    let index = 1;
    let allMatchCount = 0;

    while (tounamentName != "End of tournaments") {
        let matchCount = Number(input[index]);
        index++;
        let gameCount = 0;

        for (let i = 0; i < matchCount; i++) {
            let firstTeamScore = Number(input[index]);
            index++;
            let secondTeamScore = Number(input[index]);
            index++;
            gameCount++;
            allMatchCount++;

            if (firstTeamScore > secondTeamScore) {
                winCount++;
                console.log(`Game ${gameCount} of tournament ${tounamentName}: win with ${firstTeamScore - secondTeamScore} points.`);
            } else {
                lostCount++;
                console.log(`Game ${gameCount} of tournament ${tounamentName}: lost with ${secondTeamScore - firstTeamScore} points.`);
            }
        }

        tounamentName = input[index];
        index++;
    }

    console.log(`${((winCount / allMatchCount) * 100).toFixed(2)}% matches win`);
    console.log(`${((lostCount / allMatchCount) * 100).toFixed(2)}% matches lost`);
}
solve(["Dunkers",
    "2",
    "75",
    "65",
    "56",
    "73",
    "Fire Girls",
    "3",
    "67",
    "34",
    "83",
    "98",
    "66",
    "45",
    "End of tournaments"])