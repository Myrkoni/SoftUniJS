function modernTimeOf(text) {
    let specialWors = [];
    let arrText = text.split(" ");
    for (let word of arrText) {
        if (word[0] === "#" && word.length > 1) {
            specialWors.push(word.slice(1));
        }
    }
    for (let word of specialWors) {
        let count = 0;
        for (let i = 0; i < word.length; i++) {
            let numberOfChar = word.charCodeAt(word[i]);
            if ((numberOfChar > 64 && numberOfChar < 91) || (numberOfChar > 96 && numberOfChar < 123)) {
                count++;
            }
        }
        if (word.length === count) {
            console.log(word)
        }
    }
}
modernTimeOf('Nowadays everyone uses # to tag a #special word in #socialMedia');