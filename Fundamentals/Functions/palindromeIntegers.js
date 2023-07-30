function palindromeIntegers(arr){

    for (const num of arr) {
        let reverseNum = num.toString().split("").reverse().join("");
        if(num == reverseNum){
            console.log("true");
        }else(
            console.log("false")
        )
    }
}
palindromeIntegers([123,323,421,121])