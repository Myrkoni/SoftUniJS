function solve(input) {
    let needHeight = Number(input[0]);

    let startingHeight = needHeight - 30;
    let failedCount = 0;
    let jumpCount = 0;
    let jump = 0;
    let isJump = false;

    for (let i = 1; i <= input.length; i++) {
        jump = Number(input[i]);
        jumpCount++;
        if (jump > needHeight && startingHeight >= needHeight) {
            isJump = true;
            break;
        }
        if (startingHeight < jump) {
            startingHeight += 5;
            failedCount = 0;
        } else {
            failedCount++;
        }
        if (failedCount >= 3) {
            break;
        }
    }

    if (isJump) {
        console.log(`Tihomir succeeded, he jumped over ${startingHeight}cm after ${jumpCount} jumps.`);              
    } else {
        console.log(`Tihomir failed at ${startingHeight}cm after ${jumpCount} jumps.`); 
    }
}
solve(["231",
    "205",
    "212",
    "213",
    "228",
    "229",
    "230",
    "235"])