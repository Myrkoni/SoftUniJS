function buildWall(arr) {
    let count = 1;
    let countCubic = 0;
    let result = [];

    while (count !== 0) {
        count = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < 30) {
                arr[i] = arr[i] + 1;
                count++;
            }
        }
        if (count !== 0) {
            countCubic += (count * 195);
            result.push(count * 195);
        }
    }
    console.log(result.join(", "));
    console.log(`${countCubic * 1900} pesos`);

}

buildWall([17])