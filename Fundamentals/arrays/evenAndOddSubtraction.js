function solve(arr){
    let sumOdd = 0;
    let sumEven = 0;
    for (const num of arr) {
        if(num % 2 === 0){
            sumEven += num;
        }else{
            sumOdd += num;
        }
    }
    console.log(sumEven - sumOdd);
}
solve([1,2,3,4,5,6])