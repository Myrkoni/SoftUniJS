function solve(input){
    let n = Number(input[0]);

    for(let i =0; i<=n; i ++){
        if(i % 2 === 0){
            let Number = Math.pow(2 , i);
            console.log(Number)
        }
    }
}
solve(["10"])