function solve(number){
    let divisibleNumber = 0;
    if(number % 2 === 0){
        divisibleNumber = 2;
    }
    if(number % 3 === 0){
        divisibleNumber = 3;
    }
    if(number % 6 === 0){
        divisibleNumber = 6;
    }
    if(number % 7 === 0 ){
        divisibleNumber = 7;
    }
    if(number % 10 === 0){
        divisibleNumber = 10;
    }
    if(divisibleNumber !== 0){
    console.log(`The number is divisible by ${divisibleNumber}`);
    }else{
        console.log("Not divisible");
    }
}
solve(12)