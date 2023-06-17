function smallestTwoNumbers(arr){
    let result = arr.sort((a, b) => a - b)
    console.log(result.slice(0, 2).join(" "))
}
smallestTwoNumbers([3, 0, 10, 4, 7, 3])