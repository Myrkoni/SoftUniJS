function solve(input){
    let num1 = input[0];
    let num2 = input[1];

    let result = "";

    for(let i = Number(num1[0]); i <= Number(num2[0]); i++){
        if(i % 2 !== 0){
            for(let e = Number(num1[1]); e <= Number(num2[1]); e++){
                if(e % 2 !== 0){
                    for(let o = Number(num1[2]); o <= Number(num2[2]); o++){
                        if( o % 2 !== 0){
                            for(let u = Number(num1[3]); u <= Number(num2[3]); u ++){
                                if(u % 2 !== 0){
                                    result += `${i}${e}${o}${u} `;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}
solve(["2345",
"6789"])