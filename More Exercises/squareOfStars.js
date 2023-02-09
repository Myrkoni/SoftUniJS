function solve(input){
    let n = Number(input[0]);
    let result = "";

    for(let i = 0; i < n; i++){
        for(let e = 0; e < n; e++){
            result = result + `${"*"} `;
        }
        console.log(result);
        result = "";
    }
}
solve([3]);