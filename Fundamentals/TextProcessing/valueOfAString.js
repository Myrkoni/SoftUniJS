function valueOfAString(arr){
    let string = arr[0];
    let command = arr[1];
    let sum = 0;

    if(command === 'UPPERCASE'){
        for(let el of string){
            if(el.charCodeAt(0) >= 65 && el.charCodeAt(0) <= 90){
                sum += Number(el.charCodeAt(0));
            }
        }
    }
    if(command === 'LOWERCASE'){
        for(let el of string){
            if(el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122){
                sum += Number(el.charCodeAt(0));
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}
valueOfAString(['AC/DC',
'UPPERCASE']

)