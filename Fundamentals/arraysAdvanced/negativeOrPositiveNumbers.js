function negativeOrPositiveNumbers(arr){
    let newArr = [];
    for (let char of arr) {
       if(Number(char) < 0){
        newArr.unshift(char)
       } else {
        newArr.push(char)
       }
    }
    return newArr.join("\n");
}