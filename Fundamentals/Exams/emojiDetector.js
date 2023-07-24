function emojiDetector(data){
    let text = data[0];
    let regexEmoji = /(?<char>[:*]{2})(?<name>[A-Z][a-z]{2,})\1/gm
    let regexNumber = /[0-9]/g
    let result = [];
    let number = [];
    let sumNumber = 1;

    let matchNumb = regexNumber.exec(text);

    while(matchNumb){
        number.push(matchNumb.join(''));
        matchNumb = regexNumber.exec(text);
    }

    for(let el of number){
        sumNumber *= el
    }
    console.log(`Cool threshold: ${sumNumber}`);
    let match = regexEmoji.exec(text);
    
    while(match){
        result.push(match.groups.char + match.groups.name + match.groups.char);
        match = regexEmoji.exec(text);
    }
    console.log(`${result.length} emojis found in the text. The cool ones are:`);

    for(let el of result){
        let sumChar = 0;
        for(let i = 2; i < el.length - 2; i++){
            sumChar += el[i].charCodeAt(0);
        }
        if(sumChar > sumNumber){
            console.log(el)
        }
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])