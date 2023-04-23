function solve(input){
    let count1 = Number(input[0]);
    let count2 = Number(input[1]);
    let count5 = Number(input[2]);
    let sum = Number(input[3]);

    for( let i = 0; i <= count1; i++){
        for(let e = 0; e <= count2; e++){
            for(let o = 0; o <= count5; o++){
                if( ((i*1) + (e*2) + (o*5)) === sum){
                    console.log(`${i} * 1 lv. + ${e} * 2 lv. + ${o} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}
solve([3,2,3,10]);