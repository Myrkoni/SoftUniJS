function substitute(input){
    let k = Number(input[0]);
    let l = Number(input[1]);
    let m = Number(input[2]);
    let n = Number(input[3]);

    let count = 0;

    for(let a = k ; a <= 8; a++){
        if(a % 2 === 0){
            for(let b = 9; b >= l; b--){
                if(b % 2 !== 0){
                    for(let c = m; c <= 8; c++){
                        if(c % 2 === 0){
                            for( let d = 9; d >= n; d--){
                                if(d % 2 !== 0){
                                    if(a === c && b === d ){
                                        console.log("Cannot change the same player.");
                                    }else{
                                        console.log(`${a}${b} - ${c}${d}`);
                                        count++;
                                    }
                                    if(count >= 6){
                                        return;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
substitute(["7",
"6",
"8",
"5"])