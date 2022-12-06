function solve(input){
    let a = Number(input[0]);
    let sum = 0;
    for(i = 1; i <= 10; i++){
        sum = i * a;
        console.log(`${i} * ${a} = ${sum}`);
    }
}
solve(["5"])