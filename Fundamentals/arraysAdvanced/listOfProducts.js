function listOfProducts(arr){
    let result = arr.sort();
    for(let i = 1; i <= result.length; i++){
        console.log(`${i}.${result[i - 1]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])