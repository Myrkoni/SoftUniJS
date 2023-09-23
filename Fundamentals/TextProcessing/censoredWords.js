function censoredWords(text, word) {
    let result = text;
    let char = "*";
    while (result.includes(word)) {
        result = result.replace(word, char.repeat(word.length));
    }
    console.log(result)
}
censoredWords('A small sentence with some words', 'small');