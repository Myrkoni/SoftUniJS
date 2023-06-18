function sorting(arr){
    arr = arr.sort((a, b) => b - a);
    let newArr = [];

    while(arr.length !== 0){
        let firstElement = arr.shift();
        let endElement = arr.pop()
        newArr.push(firstElement, endElement);
    }

    console.log(newArr.join(" "))
}
sorting([1,2,3,4,5,6,7])