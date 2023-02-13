function solve(input) {
    let height = Number(input[0]);
    let width = Number(input[1]);
    let percent = Number(input[2]);
    let paint = input[3]
    let index = 4;
    let moreJob = true;

    let totalWalls = Math.ceil((height * width * 4) * ((100 - percent) / 100));

    while (paint !== "Tired!") {
        paint = Number(paint);
        totalWalls -= paint;
        paint = input[index];
        index++;
        if (totalWalls < 0) {
            console.log(`All walls are painted and you have ${Math.abs(totalWalls)} l paint left!`);
            moreJob = false;
            break;
        }
        if (totalWalls === 0) {
            console.log("All walls are painted! Great job, Pesho!");
            moreJob = false;
            break;
        }
    }
    if (moreJob) {
        console.log(`${totalWalls} quadratic m left.`);
    }
}
solve(["2",
"3",
"25",
"6",
"7",
"8"])