function firstAndLastKNumbers(arr){
    let numberOfChar = arr.shift();
    let newArr = arr.slice(0, numberOfChar);
    let newArr2 = arr.slice(-(numberOfChar));
    console.log(newArr.join(" "))
    console.log(newArr2.join(" "))
}
firstAndLastKNumbers([2, 
    7, 8, 9])