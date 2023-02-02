function solve(input) {
    let nameTeem = input[0];
    let countMeetngs = Number(input[1]);
    let result = input[2];
    let index = 3;

    let w = 0;
    let d = 0;
    let l = 0;
    let totalResult = 0;

    for (let i = 1; i <= countMeetngs; i++) {
        switch (result) {
            case "W":
                w++;
                totalResult += 3;
                break;
            case "D":
                d++;
                totalResult += 1;
                break;
            case "L":
                l++;
                break;

        }
        result = input[index];
        index++;
    }
    if((w + d + l) === 0){
        console.log(`${nameTeem} hasn't played any games during this season.`);
    }else{
        console.log(`${nameTeem} has won ${totalResult} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${w}`);
        console.log(`## D: ${d}`);
        console.log(`## L: ${l}`);
        console.log(`Win rate: ${((w / countMeetngs) * 100).toFixed(2)}%`);
    }
}
solve(["Liverpool",
"10",
"W",
"D",
"D",
"W",
"L",
"W",
"D",
"D",
"W",
"W"])