function bombNumbers(arr1, arr2) {
    let sum = 0;
    let isEnd = false;

    while (!isEnd) {
        if (arr1.includes(arr2[0])) {
            let indexDetonateNUmber = arr1.indexOf(arr2[0]);
            arr1.splice((indexDetonateNUmber - arr2[1]), (arr2[1] * 2) + 1);
        } else {
            isEnd = true;
        }
    }

    for (const num of arr1) {
        sum += num;
    }

    console.log(sum);
}

bombNumbers([1, 7, 7, 1, 2, 3],
    [7, 1]
    
)