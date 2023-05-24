function solve(arr, num){
    for(let i = 0; i < num; i++){
        let index = arr.shift(0);
        arr.push(index);
    }
    console.log(String(arr.join(" ")));
}
solve([51, 47, 32, 61, 21], 2)