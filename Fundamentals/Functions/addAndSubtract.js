function addAndSubtract(num1, num2, num3){

    let result = add(num1, num2) - num3;

    function add(num1, num2){
        return num1 + num2;
    }

    return result;
}

console.log(addAndSubtract(23,
    6,
    10))