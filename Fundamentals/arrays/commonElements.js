function solve(arr1, arr2){
    for (const str1 of arr1) {
        for (const str2 of arr2) {
            if(str1 === str2){
                console.log(str1);
            }
        }
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2'])