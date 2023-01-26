function solve(input){
    let index = 0;
    let n = Number(input[index]);
    index++;
    let m = Number(input[index]);
    index++;
    let num = 0;

    for( let i = 0; i < n ; i++){
        num += m;
        m = Number(input[index]);
        index++;
    }
    console.log((num / n).toFixed(2));
}
solve([4,
    95,
    23,
    76,
    23])