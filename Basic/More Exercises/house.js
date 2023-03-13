function solve(input){
    let number = Number(input[0]);
    let result = "";

    for(let i = 1; i <= number; i++){
        for(let j = 1; j <= number; j++){
            if(i / 2 === j || (i +1) / 2 === j ){
                if(number % 2 === 0){
                    
                }
                result += "*"
            }
        }
        console.log(result);
        result = "";
    }
}
solve([3]);