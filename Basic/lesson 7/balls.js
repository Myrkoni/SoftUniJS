function solve(input) {
    let ballsCount = Number(input[0]);

    let totalPoints = 0;
    let redBalls = 0;
    let orangeBalls = 0;
    let yellowBalls = 0;
    let whiteBalla = 0;
    let otherColors = 0;
    let blackBalls = 0;

    for (let i = 1; i <= ballsCount; i++) {
        let colors = input[i];
        if (colors === "white") {
            whiteBalla++;
            totalPoints += 20;
        } else if (colors === "red") {
            redBalls++
            totalPoints += 5;
        } else if (colors === "orange") {
            orangeBalls++;
            totalPoints += 10;
        } else if (colors === "yellow") {
            yellowBalls++;
            totalPoints += 15;
        } else if (colors === "black") {
            blackBalls++;
            totalPoints = Math.floor(totalPoints / 2);
        } else {
            otherColors++;
        }
    }
    console.log(`Total points: ${totalPoints}`);
    console.log(`Red balls: ${redBalls}`);
    console.log(`Orange balls: ${orangeBalls}`);
    console.log(`Yellow balls: ${yellowBalls}`);
    console.log(`White balls: ${whiteBalla}`);
    console.log(`Other colors picked: ${otherColors}`);
    console.log(`Divides from black balls: ${blackBalls}`);
}
solve(["5",
"red",
"red",
"ddd",
"ddd",
"ddd"])