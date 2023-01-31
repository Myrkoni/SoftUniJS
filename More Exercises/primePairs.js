function solve(input) {
    let first = Number(input[0]);
    let second = Number(input[1]);
    let a = Number(input[2]);
    let b = Number(input[3]);
    let isPrime = true;
    let isPrime2 = true;

    for (let i = first; i <= first + a; i++) {
        isPrime2 = true;
        for (let d = 2; d < i; d++) {
            if (i % d === 0) {
                isPrime2 = false;
                break;
            }
        }
        if (isPrime2) {
            for (let e = second; e <= second + b; e++) {
                isPrime = true;
                for (let c = 2; c < e; c++) {
                    if (e % c === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    console.log(`${i}${e}`);
                }
            }
        }
    }
}
solve([10, 30, 9, 6])