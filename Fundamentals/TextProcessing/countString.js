function countString(text, word){
    let count = 0;
    let arrText = text.split(" ");
    for(let char of arrText){
        if(char === word){
            count++;
        }
    }
    console.log(count)
}

countString('This is a word and it also is a sentence', 'is');