function solve(input) {
    let a1 = Number(input[0]);
    let a2 = Number(input[1]);
    let n = Number(input[2]);

    for (let i = a1; i < a2; i++) {
        if (i % 2 !== 0) {
            for (let e = 1; e < n; e++) {
                for (let o = 1; o < Math.floor(n / 2); o++) {
                    if((i + e + o) % 2 !== 0){
                        console.log(`${String.fromCharCode(i)}-${e}${o}${i}`);
                    }
                }
            }
        }
    }
}
solve([76,
    78,
    7])

