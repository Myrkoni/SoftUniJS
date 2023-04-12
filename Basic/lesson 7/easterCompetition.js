function solve(input) {
    let breadCount = Number(input[0]);
    let index = 1;
    let sumBakerPoints = 0;
    let MaxPoints = 0;
    let nameWonBaker = "";

    for (let i = 0; i < breadCount; i++) {
        let nameBaker = input[index]
        index++;
        let action = input[index];
        index++;

        while (action != "Stop") {
            action = Number(action);
            sumBakerPoints += action;

            action = input[index];
            index++;

        }
        console.log(`${nameBaker} has ${sumBakerPoints} points.`);

        if (sumBakerPoints > MaxPoints) {
            MaxPoints = sumBakerPoints;
            nameWonBaker = nameBaker;
            console.log(`${nameWonBaker} is the new number 1!`);
        }

        sumBakerPoints = 0;
        
    }
    console.log(`${nameWonBaker} won competition with ${MaxPoints} points!`);
}
solve(["2",
"Chef Angelov",
"9",
"9",
"9",
"Stop",
"Chef Rowe",
"10",
"10",
"10",
"10",
"Stop"])