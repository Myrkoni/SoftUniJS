function solve(input){
    let volumePool = Number(input[0]);
    let debitFirstPipe = Number(input[1]);
    let debitSecondPipe = Number(input[2]);
    let hours = Number(input[3]);

    let totalFirstPipe = debitFirstPipe * hours;
    let totalSecondPipe = debitSecondPipe * hours;
    let poolLiters = totalFirstPipe + totalSecondPipe;
    let percentFilled = poolLiters / (volumePool /100);
    let percentFirtPipe = totalFirstPipe / (poolLiters / 100);
    let percentSecondPipe = totalSecondPipe / (poolLiters / 100);

    if(volumePool >= poolLiters){
        console.log(`The pool is ${percentFilled.toFixed(2)}% full. Pipe 1: ${percentFirtPipe.toFixed(2)}%. Pipe 2: ${percentSecondPipe.toFixed(2)}%.`);
    }else if(poolLiters > volumePool){
        console.log(`For ${hours} hours the pool overflows with ${poolLiters - volumePool} liters.`);
    }
}
solve([1000,
    100,
    120,
    3])