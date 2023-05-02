function solve(input) {
    let n = Number(input[0]);


    for (let i = 1; i <= n; i++) {
        let result = "";
        let spaces = " ".repeat(n - i);
        for (let e = 1; e <= i; e++) {
            result = result + `${"*"} `;
        }
        console.log(spaces+result);
    }

    for (let a = (n - 1); a >= 1; a--) {
        let result = "";
        let spaces = " ".repeat(n - a);
        for (let b = 1; b <= a; b++) {
            result = result + `${"*"} `;
        }

        console.log(spaces+result);
    }
}
solve([4])