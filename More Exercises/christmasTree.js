function solve(input){
    let n = Number(input[0]);
    let result = "";
    let spaces = "";

    for(let i = 0; i <= n; i++){
        spaces = " ".repeat(n - i);
        for(let e = 1; e <= i; e++){          
            result += `${"*"}`;
        }
        console.log(`${spaces}${result} | ${result}`);
        result = "";
    }
}
solve([5])