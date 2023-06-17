function searchForNumber( arr1, arr2){
    let newArr = [];
    let count = 0;
    let isEnd = false;

    for(let i = 0; i < arr2[0]; i++){
        newArr.push(arr1.shift());
    }
    newArr.splice(0, arr2[1]);

    while(!isEnd){
        if(newArr.includes(arr2[2])){
            count++;
            newArr.splice(newArr.indexOf(arr2[2]), 1);
        }else{
            isEnd = true;
        }
    }

    console.log(`Number ${arr2[2]} occurs ${count} times.`);
}

searchForNumber([5, 5, 5, 5, 5, 5, 5],
    [3, 1, 5]
    )