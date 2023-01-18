function solve(input) {
    let index = 0;
    let num = Number(input[index]);
    index++;
    let sum1 = 0;
    let sum2 = 0;
    let count = 0;
    let value = true;
    let result = 0;
    let max = 0;
    let count2 = 0;

    for (let i = 0; i < num; i++) {
        let m = Number(input[index]);
        index++;
        let n = Number(input[index]);
        index++
        count++;
        count2++;
        if (count < 2) {
            sum1 = m + n;
        } else {
            sum2 = m + n;
            count = 0;
        }
        if (count2 > 1) {
            if (sum1 !== sum2) {
                result = Math.abs(sum1 - sum2);
                value = false;
            }
            if (max < result) {
                max = result;
            }
        }
    }
    if (value) {
        console.log(`Yes, value=${sum1}`);
    } else {
        console.log(`No, maxdiff=${max}`);
    }
}
solve([3,
    1,
    2,
    0,
    3,
    4,
    -1])