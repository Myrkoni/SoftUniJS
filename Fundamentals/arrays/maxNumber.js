function solve(arr) {
    let maxNum = "";
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let isMax = false;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                isMax = true;
            } else {
                isMax = false;
                break;
            }
        }
        if (isMax) {
            maxNum += `${arr[i]} `;
        }
    }
    maxNum += `${arr[arr.length - 1]} `;
    console.log(maxNum);
}
solve([27, 19, 42, 2, 13, 45, 48])