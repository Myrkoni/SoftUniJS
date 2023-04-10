function solve(input) {
    let countVisitors = Number(input[0]);

    let countBack = 0;
    let countChest = 0;
    let countLegs = 0;
    let countAbs = 0;
    let countPrteinShake = 0;
    let countProteinBar = 0;

    for (let i = 1; i <= countVisitors; i++) {
        let activity = input[i];

        switch (activity) {
            case "Back":
                countBack++;
                break;
            case "Chest":
                countChest++;
                break;
            case "Legs":
                countLegs++;
                break;
            case "Abs":
                countAbs++;
                break;
            case "Protein shake":
                countPrteinShake++;
                break;
            case "Protein bar":
                countProteinBar++;
                break;
            default:
                break;
        }
    }

    console.log(`${countBack} - back`);
    console.log(`${countChest} - chest`);
    console.log(`${countLegs} - legs`);
    console.log(`${countAbs} - abs`);
    console.log(`${countPrteinShake} - protein shake`);
    console.log(`${countProteinBar} - protein bar`);

    let totalWorkOut = countBack + countBack + countLegs + countAbs;
    let totalProtein = countPrteinShake + countProteinBar;
    
    console.log(`${((totalWorkOut / countVisitors) * 100).toFixed(2)}% - work out`);
    console.log(`${((totalProtein / countVisitors) * 100).toFixed(2)}% - protein`);
}
solve(["10",
"Back",
"Chest",
"Legs",
"Abs",
"Protein shake",
"Protein bar",
"Protein shake",
"Protein bar",
"Legs",
"Abs"])