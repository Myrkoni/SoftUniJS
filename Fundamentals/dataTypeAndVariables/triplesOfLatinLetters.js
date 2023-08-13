function solve(number){
    number = Number(number);
    for(let i = 0; i < number; i++){
        for(let j = 0; j < number; j++){
            for(let k = 0; k < number; k++){
                console.log(`${String.fromCharCode(97 + i, 97 + j, 97 + k)}`)
            }
        }
    }
}
solve('3');