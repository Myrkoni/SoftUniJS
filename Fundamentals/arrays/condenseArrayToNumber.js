function solve(arr){
    let newArr = arr;
    
    while(newArr.length !== 1){
        let currArr = [];
        for(let i = 0; i < newArr.length - 1; i++){
            let sum = newArr[i] + newArr[i+ 1];
            currArr.push(sum);
        }
        newArr = currArr;
    }
    console.log(String(newArr));
}
solve([2,10,3])