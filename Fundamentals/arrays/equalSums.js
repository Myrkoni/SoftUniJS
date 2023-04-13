function solve(arr) {
    let position = 0;
    let isValed = false;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rigthSum = 0;
        if (arr.length === 1) {
            position = i;
            isValed = true;
            break;
        }

        for(let j = 0; j <= i; j++){
            leftSum += arr[j];
        }
        for(let k = i + 2; k < arr.length; k++){
            rigthSum += arr[k];
        }
        if(leftSum === rigthSum){
            position = i + 1;
            isValed = true;
        }

    }
    if(isValed){
        console.log(position);
    }else{
        console.log("no");
    }
}
solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4])