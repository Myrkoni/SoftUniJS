function solve(number){
    let noPrime = false;
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            noPrime = true;
        }
    }
    console.log(noPrime ? false : true);
}
solve(8)