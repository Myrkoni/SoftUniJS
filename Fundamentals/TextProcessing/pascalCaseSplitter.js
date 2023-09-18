function pascalCaseSplitter(string){
    let result = "";

    for(let i = 0; i < string.length; i++){
        result += string[i];
        if(string.charCodeAt(i + 1) > 64 && string.charCodeAt(i + 1) < 91){
            result += " ";
        }      
    }
    result = result.split(" ").join(", ")
    console.log(result);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')