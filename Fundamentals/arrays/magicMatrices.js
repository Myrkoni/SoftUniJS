function solve(arr) {
    let firstArr = arr[0];
    let secondArr = arr[1];
    let thurdArr = arr[2];

    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    let sum4 = firstArr[0] + secondArr[0] + thurdArr[0];
    let sum5 = firstArr[1] + secondArr[1] + thurdArr[1];
    let sum6 = firstArr[2] + secondArr[2] + thurdArr[2];
    for (let i = 0; i < firstArr.length; i++) {
        sum1 += firstArr[i];
        sum2 += secondArr[i];
        sum3 += thurdArr[i];
    }
    if (sum1 === sum2 && sum2 === sum3 && sum4 === sum5 && sum5 === sum6 && sum3 === sum4) {
        console.log("true");
    } else {
        console.log("false")
    }
}
solve([
[4, 5, 6],
[6, 5, 4],
[5, 5, 5]
])