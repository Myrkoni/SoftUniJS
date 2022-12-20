function solve(input){
    let num1 = Number(input[0]);
    let NextNumber = Number(input[1]);
    let index = 1;
    index++;
    let sum = 0;
    
    while(sum < num1){
        sum = sum + NextNumber;
        NextNumber = Number(input[index]);
        index++
    }
    console.log(sum)
}
solve(["20", "1", "2", "3", "4", "5", "6"]) 