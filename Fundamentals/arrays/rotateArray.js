function solve(arr){
    let n = arr.pop();
    let buff = "";

    for(let i = 0; i < n; i++){
        buff = arr.pop();
        arr.unshift(buff);
    }
    console.log(String(arr.join(" ")));
}
solve(['1', '2', '3', '4', '2'])