function solve(arr) {
    let newArr = [arr[0]];
    let newMax = arr[0];
    for (let i = 1; i <= arr.length; i++) {
        if (newMax <= arr[i]) {
            newMax = arr[i];
            newArr.push(newMax);
        }
    }
    console.log(String(newArr.join(" ")));
}
solve([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);