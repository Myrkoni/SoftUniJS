function solve(input) {
    let n = Number(input[0]);
    let result = "";

    for (let i = 1; i <= n; i++) {
        for (let e = 1; e <= n; e++) {
            if((i === 1 && e === 1) || (i === n && e ===n) || (i === 1 && e === n) || (i === n && e === 1)){
                result = result + `${"+"} `;
            }else if((i > 1 && e === n) || (i > 1 && e === 1)){
                result = result + `${"|"} `;
            }else{
                result = result + `${"-"} `;
            }
        }
        
        console.log(result);
        result = "";
    }
}
solve([4])