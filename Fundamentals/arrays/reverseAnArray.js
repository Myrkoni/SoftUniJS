function solve(num, arr){
    let newArr = [];
    for(let i = num - 1; i >= 0; i--){
        newArr.push(arr[i]);
    }
    console.log(newArr.join(" "));
}
solve(3, [10, 20, 30, 40, 50])
