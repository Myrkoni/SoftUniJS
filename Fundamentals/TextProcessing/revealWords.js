function revealWords(words, text){
    let arrText = text.split(" ");
    let arrWords = words.split(", ");

    for(let word of arrWords){
        for(let currentWord of arrText){
            if(currentWord[0] === "*" ){
                if(currentWord.length === word.length){
                    text = text.replace(currentWord, word);
                }
            }
        }
    }
    console.log(text);
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')