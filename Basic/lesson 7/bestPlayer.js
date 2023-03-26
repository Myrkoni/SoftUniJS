function solve(input) {
    let index = 0;
    let namePlayer = input[index];
    index++
    let goalCount = Number(input[index]);
    index++;

    let maxGoal = 0;
    let playrMaxGoal = ""
    let threeGoal = false;

    while (namePlayer   != "END") {
        if (maxGoal < goalCount) {
            maxGoal = goalCount;
            playrMaxGoal = namePlayer;
            if (maxGoal >= 3) {
                threeGoal = true;
            }
            if (goalCount >= 10) {
                break;
            }
        }

        namePlayer = input[index];
        index++;
        goalCount = Number(input[index]);
        index++;
    }

    console.log(`${playrMaxGoal} is the best player!`);
    if(threeGoal){
        console.log(`He has scored ${maxGoal} goals and made a hat-trick !!!`);
    }else{
        console.log(`He has scored ${maxGoal} goals.`);
    }
}
solve(["Silva",
"5",
"Harry Kane",
"10"])