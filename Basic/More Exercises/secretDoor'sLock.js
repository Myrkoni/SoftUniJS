function solve(input) {
    let a = Number(input[0]);
    let b = Number(input[1]);
    let c = Number(input[2]);
    let isPrime = true;

    for (let i = 1; i <= a; i++) {
        if (i % 2 === 0) {
            for (let e = 2; e <= b; e++) {
                isPrime = true;
                for (let q = 2; q < e; q++) {
                    if (e % q === 0) {
                        isPrime = false;
                        break;
                    }
                }
                if (isPrime) {
                    for (n = 1; n <= c; n++) {
                        if (n % 2 === 0) {
                            console.log(`${i} ${e} ${n}`);
                        }
                    }
                }
            }
        }
    }
}
solve([3, 5, 5])