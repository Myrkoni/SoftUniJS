function solve( arr1, arr2 ){
    let sum = 0;
    let isIdentical = true;
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] === arr2[i]){
            sum += Number(arr1[i]);
        }else{
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isIdentical = false;
            break;
        }
    }
    if(isIdentical){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
solve(['1'], ['10'])