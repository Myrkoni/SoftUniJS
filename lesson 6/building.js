function solve(input) {
    let floor = Number(input[0]);
    let room = Number(input[1]);
    let resault = "";

    for (let i = floor; i > 0; i--) {
        for (let j = 0; j < room; j++) {
            if (i === floor) {
                resault = resault + ` L${i}${j}`;
            } else if (i % 2 === 0) {
                resault = resault + ` O${i}${j}`;
            } else {
                resault = resault + ` A${i}${j}`;
            }
        }
        console.log(resault);
        resault = "";
    }
}
solve(["9",

"5"])