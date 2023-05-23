function solve(arr){
    let sumArr = 0;
    let sumNewArr = 0;
    let newArr = [];

    for(let i = 0; i < arr.length; i++){
        sumArr += arr[i];
        if(arr[i] % 2 === 0){
            newArr.push(arr[i] + i);
            sumNewArr += arr[i] + i;
        }else{
            newArr.push(arr[i] - i);
            sumNewArr += arr[i] - i;
        }
    }
    console.log(newArr);
    console.log(sumArr);
    console.log(sumNewArr);

}
solve([5, 15, 23, 56, 35])