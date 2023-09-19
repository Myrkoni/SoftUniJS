function stringSubstring(word, text){
    let lowerText = text.toLowerCase();
    let lowerWord = word.toLowerCase();
    
    if(lowerText.includes(lowerWord)){
        console.log(word);
        return;
    }else{
        console.log(`${word} not found!`)
    }
}
stringSubstring('javascript',
'JavaScript is the best programming language');