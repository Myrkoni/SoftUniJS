function oddOccurrences(input){

    let result = new Map;
    
    for(let el of input.split(" ")){
        let leter = el.toLowerCase();
        if(result.has(leter)){
            result.set(leter, result.get(leter) + 1);
        }else{
            result.set(leter, 1)
        }
    }
    let result2 = []
    
    for(let [key, count] of result){
        if(count % 2 !== 0){
            result2.push(key);
        }
    }
    console.log(result2.join(" "))
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');