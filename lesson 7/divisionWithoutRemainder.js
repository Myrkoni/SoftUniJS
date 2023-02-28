function solve(input){
    let n = Number(input[0]);
    
    let countP1 = 0;
    let countP2 = 0;
    let countP3 = 0;

    for(let i = 1; i <= n; i++){
        let m = Number(input[i]);
        if( m % 2 === 0){
            countP1++;
        }
        if( m % 3 === 0){
            countP2++;
        }
        if( m % 4 === 0){
            countP3++;
        }
    }
    console.log(`${((countP1 / n) * 100).toFixed(2)}%`);
    console.log(`${((countP2 / n) * 100).toFixed(2)}%`);
    console.log(`${((countP3 / n) * 100).toFixed(2)}%`);
}
solve(["10",
"680",
"2",
"600",
"200",
"800",
"799",
"199",
"46",
"128",
"65"])