function solve(input) {
    let m = Number(input[0]);

    let counter = 0;
    let counterPrint = 0;
    let noPassword = true;
    let result = "";
    let result2 = "";

    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (((a * b) + (c * d)) === m) {
                        if ((a < b) && (c > d)) {
                            counter++;
                            result2 += `${a}${b}${c}${d} `;
                            if (counter >= 4 && counterPrint === 0) {
                                counterPrint++;
                                result = `Password: ${a}${b}${c}${d}`;
                                noPassword = false;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(result2)
    if (noPassword) {
        console.log("No!")
    } else {
        console.log(result);
    }
}
solve([11])