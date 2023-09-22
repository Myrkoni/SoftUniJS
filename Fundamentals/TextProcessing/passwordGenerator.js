function passwordGenerator(input) {
    let vowels = {
        "a": "A",
        "o": "O",
        "u": "U",
        "e": "E",
        "i": "I",
    }

    let password = (input[0] + input[1]).split("");
    let word = input[2].toUpperCase();
    let isEnd = false;
    let index = 0;

    while (!isEnd) {
        
        for (let i = 0; i < password.length; i++) {
            if (vowels.hasOwnProperty(password[i])) {
                password[i] = word[index];
                if (i === password.length - 1) {
                    isEnd = true;
                }
                break;
            }

            if (i === password.length - 1) {
                isEnd = true;
            }
        }

        index++;
        if (index === word.length) {
            index = 0;
        }
    }
    console.log(`Your generated password is ${password.reverse().join("")}`);
}
passwordGenerator([
    'ilovepizza',
    'ihatevegetables',
    'orange'
])
console.log("sElbGtNgAvRtOhEGzzNpAvRlO")