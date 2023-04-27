function solve(input){
    let index = 0;
    let inputElemet = input[index];
    index++
    let max = Number.MIN_SAFE_INTEGER;
    while(inputElemet !== "Stop"){
        let num = Number(inputElemet);
        if(num > max){
            max = num;
        }
        inputElemet = input[index];
        index++
    }
    console.log(max)
}
solve(["-1", "-2", "Stop"])