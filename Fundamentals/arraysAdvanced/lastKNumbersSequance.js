function lastKNUmbersSequance(n, k){
    let result = [1];
    let count = 1;
    while(count < n){
        result.push(sumOfArr(result, k));
        count++
    }
    console.log(result.join(" "))

    function sumOfArr(arr, n){
        let sum = 0;
        let counter = 1;
        for(let i = arr.length - 1; counter <= n; i--){
            if(i < 0){
                break;
            }
            sum += arr[i];
            counter++;
            
        }
        return sum;
    }
}
lastKNUmbersSequance(8, 2);