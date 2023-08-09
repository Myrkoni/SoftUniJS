function numberModification(number) {
    let avarageSum = 0;
    let isFinish = "no";

    while (isFinish !== "yes") {
        if (avarageValue(number) > 5){
            console.log(number);
            isFinish = "yes";
        }else{
            number += "9";
        }     
    }

    function avarageValue(number) {
        number = number.toString();
        let sum = 0;
        for (let i = 0; i < number.length; i++) {
            sum += Number(number[i]);
        }
        avarageSum = sum / number.length;
        return avarageSum;
    }
}
numberModification(101)