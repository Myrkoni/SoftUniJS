function solve(input) {
    let index = 0;
    let letter = input[index];
    index++;
    let countC = 0;
    let countO = 0;
    let countN = 0;
    let result = "";
    let parola = false;
    let result2 = "";
    let parola2 = true;

    while (letter !== "End") {
        let code = letter.charCodeAt(letter);
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            
            if (countC === 0) {
                if (letter === "c") {
                    countC++;
                    parola2 = false;
                }
            }
            if (countO === 0) {
                if (letter === "o") {
                    countO++;
                    parola2 = false;
                }
            }
            if (countN === 0) {
                if (letter === "n") {
                    countN++;
                    parola2 = false;
                }
            }
            if(parola2){
            result = result + `${letter}`;
            }
            if (countC === 1 && countN === 1 && countO === 1) {
                result = result + " ";
                countC = 0;
                countN = 0;
                countO = 0;
                parola = true;
            }

            
            if(parola){
                result2 = result2 + `${ result}`;
                result = "";
                parola = false;
            }

        }
        letter = input[index];
        index++;
        parola2 = true;
    }
    console.log(result2);
}
solve(["o",
    "S",
    "%",
    "o",
    "l",
    "^",
    "v",
    "e",
    "c",
    "n",
    "&",
    "m",
    "e",
    "c",
    "o",
    "n",
    "End"
])