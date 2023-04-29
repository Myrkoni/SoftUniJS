function solve(input) {
    let index = 0;
    let word = input[index];
    index++

    let sum1 = 0;
    let sum2 = 0;
    let word2 = "";

    while (word !== "End of words") {
        for (let i = 0; i < word.length; i++) {
            sum1 += word.codePointAt(i);
        }
        if (word.charAt(0) === "A" || word.charAt(0) === "a") {
            sum1 = sum1 * word.length;
        } else if (word.charAt(0) === "E" || word.charAt(0) === "e") {
            sum1 = sum1 * word.length;
        } else if (word.charAt(0) === "I" || word.charAt(0) === "i") {
            sum1 = sum1 * word.length;
        } else if (word.charAt(0) === "O" || word.charAt(0) === "o") {
            sum1 = sum1 * word.length;
        } else if (word.charAt(0) === "U" || word.charAt(0) === "u") {
            sum1 = sum1 * word.length;
        } else if (word.charAt(0) === "Y" || word.charAt(0) === "y") {
            sum1 = sum1 * word.length;
        } else {
            sum1 = Math.floor(sum1 / word.length);
        }
        if (sum1 > sum2) {
            sum2 = sum1;
            word2 = word;
        }
        sum1 = 0;
        word = input[index];
        index++
    }
    console.log(`The most powerful word is ${word2} - ${sum2}`);
}
solve(["But",
"Some",
"People",
"Say",
"It's",
"LOVE",
"End of words"])