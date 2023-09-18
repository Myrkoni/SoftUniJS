function serializeString(arr){
    let string = arr[0];
    let result = {};

    for(let i = 0; i < string.length; i++){
        let char = string[i];
        if(!result.hasOwnProperty(char)){
            result[char] = [];
        }
        if(result.hasOwnProperty(char)){
            result[char].push(i);
        }
        
    }
    
    let keyOfResult = Object.entries(result);
    for(let el of keyOfResult){
        console.log(`${el[0]}:${el[1].join('/')}`)
    }
}
serializeString(["avjavamsdmcalsdm"]);