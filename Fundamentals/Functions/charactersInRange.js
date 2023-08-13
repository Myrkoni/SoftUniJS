function charactersInRange(firstChar, secondChar){
    let result = "";
    let firstCharNumber = firstChar.charCodeAt(0);
    let secondCharNumer = secondChar.charCodeAt(0)

    if(firstCharNumber < secondCharNumer){
        for(let i = firstCharNumber + 1; i < secondCharNumer; i++){
            result += `${String.fromCharCode(i)} `;
        }
    }else{
        for(let i = secondCharNumer + 1; i < firstCharNumber; i++){
            result += `${String.fromCharCode(i)} `;
        }
    }
    
    return result;
    
}

console.log(charactersInRange('C',
'#'))