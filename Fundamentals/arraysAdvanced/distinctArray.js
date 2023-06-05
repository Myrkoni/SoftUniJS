function distinctArray(arr) {
    
        for (let i = 0; i < arr.length; i++) {
            for (let j = arr.length - 1 ; j > i ; j--) {
                if (arr[i] === arr[j]) {
                    arr.splice(j, 1);
                }
            }
        }
        

    return arr.join(" ")

}

console.log(distinctArray([7, 8, 9, 7, 2, 3,
    4, 1, 2]
));