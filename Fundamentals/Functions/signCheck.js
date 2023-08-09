function singCheck(num1, num2, num3){
    let sing = "Positive";

    let isNum1Negative = num1 < 0;
    sing = chechAndChangeSing(sing, isNum1Negative);
    let isNum2Negative = num2 < 0;
    sing = chechAndChangeSing(sing, isNum2Negative);
    let isNum3Negative = num3 < 0;
    sing = chechAndChangeSing(sing, isNum3Negative);


    function chechAndChangeSing(sing, changeSing){
        if(changeSing === false){
            return sing;
        }

        if(sing === "Positive"){
            sing = "Negative";
        }else { 
            sing = "Positive"
        }
        return sing;
    }

    return sing;

}

console.log(singCheck( -6,
    -12,
     14))