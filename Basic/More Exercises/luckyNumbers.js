function solve(input){
    let n = Number(input[0]);
    let result = "";

    for(let i = 1; i <= 9; i++){
        for(let e = 1; e <= 9; e++){
            for(let o = 1; o <= 9; o++){
                for(let u = 1; u <= 9; u++){
                    if((i + e) === (o + u)){
                        if(n % (i + e) === 0){
                            result += `${i}${e}${o}${u} `;
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}
solve([3])