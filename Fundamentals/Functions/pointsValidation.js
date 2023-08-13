function pointsValidation(arr){

    let firstResult = formula(arr[0], arr[2], 0, 0);

    if(Number.isInteger(firstResult)){
        console.log(`{${arr[0]}, ${arr[1]}} to {${0}, ${0}} is valid`);
    }else{
        console.log(`{${arr[0]}, ${arr[1]}} to {${0}, ${0}} is invalid`)
    }

    let secondReult = formula(arr[2], arr[3], 0, 0);

    if(Number.isInteger(secondReult)){
        console.log(`{${arr[2]}, ${arr[3]}} to {${0}, ${0}} is valid`);
    }else{
        console.log(`{${arr[2]}, ${arr[3]}} to {${0}, ${0}} is invalid`)
    }

    let thirdResult = formula(arr[0], arr[1], arr[2], arr[3]);
    
    if(Number.isInteger(thirdResult)){
        console.log(`{${arr[0]}, ${arr[1]}} to {${arr[2]}, ${arr[3]}} is valid`);
    }else{
        console.log(`{${arr[0]}, ${arr[1]}} to ${arr[2], arr[3]} is invalid`)
    }

    function formula(x1, y1, x2, y2){
        let result =  Math.sqrt((Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2)));
        return result;
    }
}

pointsValidation([2, 1, 1, 1]);