function solve(){
    let result = "";
    for(let i = 0; i < 10; i++){
        for(let n = 0; n < 10; n++){
            result = result + `${"*"}`;
        }
        console.log(result);
        result = "";
    }
    
}
solve()