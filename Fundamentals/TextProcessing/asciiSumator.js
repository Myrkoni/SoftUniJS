function asciiSumator(data){
    let start = data[0];
    let end = data[1];
    let string = data[2];
    let sum = 0;

    if(start.charCodeAt(0) > end.charCodeAt(0)){
        start = data[1];
        end = data[0];
    }

    for(let el of string){
        if(el.charCodeAt(0) > start.charCodeAt(0) && el.charCodeAt(0) < end.charCodeAt(0)){
            sum += el.charCodeAt(0);
        }
    }
    console.log(sum)
}
asciiSumator(['.',
'@',
'dsg12gr5653feee5'])