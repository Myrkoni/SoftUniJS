function solve(input) {
    let countCame = Number(input[0]);
    let game = input[1];
    index = 2;

    let countHearthstone = 0;
    let countFornite = 0;
    let countOverwatch = 0;
    let countOthers = 0;

    for (let i = 1; i <= countCame; i++) {
        switch (game) {
            case "Hearthstone":
                countHearthstone++
                break;
            case "Fornite":
                countFornite++;
                break;
            case "Overwatch":
                countOverwatch++;
                break;
            default:
                countOthers++;
                break;

        }
        game = input[index];
        index++;
    }
    console.log(`Hearthstone - ${((countHearthstone / countCame) * 100).toFixed(2)}%`);
    console.log(`Fornite - ${((countFornite / countCame) * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${((countOverwatch / countCame) * 100).toFixed(2)}%`);
    console.log(`Others - ${((countOthers / countCame) * 100).toFixed(2)}%`);
}
solve(["4",
"Hearthstone",
"Fornite",
"Overwatch",
"Counter-Strike"])