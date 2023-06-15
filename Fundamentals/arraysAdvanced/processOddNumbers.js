function processOddNumbers(arr){
    let newArr = arr.filter((num, i) => i  % 2 !== 0).map(i => i * 2);
    console.log(newArr.reverse().join(" "))

}
processOddNumbers([3, 0, 10, 4, 7, 3])