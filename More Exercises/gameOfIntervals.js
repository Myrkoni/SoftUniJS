function solve(input){
    let index = 0;
    let m = Number(input[index]);
    index++;

    let countTo9 = 0;
    let countTo19 = 0;
    let countTo29 = 0;
    let countTo39 = 0;
    let countTo50 = 0;
    let score = 0;
    let negative = 0;

    for(let i = 0; i < m; i++){
        let n = Number(input[index]);
        index++;
        if(n >= 0 && n <= 9){
            countTo9++;
            score = score + (n * 0.20);
        }else if(n >= 10 && n <= 19){
            countTo19++;
            score = score + (n * 0.30);
        }else if(n >= 20 && n <= 29){
            countTo29++;
            score = score + (n * 0.40);
        }else if(n >= 30 && n <= 39){
            countTo39++;
            score = score + 50;
        }else if(n >= 40 && n <=50){
            countTo50++;
            score = score + 100;
        }else{
            negative++;
            score = score / 2;
        }
    }
    console.log(`${score.toFixed(2)}`);
    console.log(`From 0 to 9: ${((countTo9 / m) * 100).toFixed(2)}%`);
    console.log(`From 10 to 19: ${((countTo19 / m) * 100).toFixed(2)}%`);
    console.log(`From 20 to 29: ${((countTo29 / m ) * 100).toFixed(2)}%`);
    console.log(`From 30 to 39: ${((countTo39 / m) * 100).toFixed(2)}%`);
    console.log(`From 40 to 50: ${((countTo50 / m) * 100).toFixed(2)}%`);
    console.log(`Invalid numbers: ${((negative / m) * 100).toFixed(2)}%`);
}
solve([10,
    43,
    57,
    -12,
    23,
    12,
    0,
    50,
    40,
    30,
    20])