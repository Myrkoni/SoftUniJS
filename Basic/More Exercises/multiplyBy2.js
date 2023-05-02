function solve(input){
    index = 0;
    let num = Number(input[index]);
    index++;
    let result = 0;
    
    while ( num >= 0){
        result = num * 2;
        console.log(`Result: ${result.toFixed(2)}`);
        num = Number(input[index]);
        index++;
    }
    console.log("Negative number!");
}
solve([23.43,
    12.3245,
    0,
    -65.23432,
    23,
    65,
    -12])