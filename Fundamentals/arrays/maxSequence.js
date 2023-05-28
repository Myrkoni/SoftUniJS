function solve(arr) {
    let result = "";
    let char = ""
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let counter = 0;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                counter++;
                if (counter > maxCount) {
                    char = arr[i];
                    maxCount = counter;
                }
            } else {
                break;
            }
        }
    }
    for(let i = 0; i <= maxCount; i++){
        result += `${char} `;
    }
    console.log(result);
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])