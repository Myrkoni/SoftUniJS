function solve(input){
    let n = Number(input[0]);
    let m = Number(input[1]);
    let sum = 0;

    for(i = n; i<= m; i++){
        if(i % 9 === 0){
            sum = sum + i; 
        }
    }
    console.log(`The sum: ${sum}`);
    for(i = n; i<= m; i++){
        if(i % 9 === 0){
            console.log(i);
        }
    }
}    
solve([100 , 200])