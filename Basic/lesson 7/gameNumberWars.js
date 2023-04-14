function solve(input) {
    let nameFirstPlayr = input[0];
    let nameSecondPlayer = input[1];
    let index = 2;
    let cardFirstPlayer = input[index];
    index++;
    let cardSecondPrayer = Number(input[index]);
    index++;

    let sumFirstPlayer = 0;
    let sumSecondPlayer = 0;
    let winner = "";
    let winnerPoints = 0;
    let isWinner = false;

    while (cardFirstPlayer !== "End of game") {
        cardFirstPlayer = Number(cardFirstPlayer);

        if (cardFirstPlayer > cardSecondPrayer) {
            sumFirstPlayer += cardFirstPlayer - cardSecondPrayer;
        } else if (cardSecondPrayer > cardFirstPlayer) {
            sumSecondPlayer += cardSecondPrayer - cardFirstPlayer;
        } else {
            cardFirstPlayer = Number(input[index]);
            index++;
            cardSecondPrayer = Number(input[index]);
            if (cardFirstPlayer > cardSecondPrayer) {
                winner = nameFirstPlayr;
                winnerPoints = sumFirstPlayer;
            } else {
                winner = nameSecondPlayer;
                winnerPoints = sumSecondPlayer;
            }
            isWinner = true;
            break;
        }

        cardFirstPlayer = input[index];
        index++;
        cardSecondPrayer = Number(input[index]);
        index++;
    }

    if (isWinner) {
        console.log("Number wars!");
        console.log(`${winner} is winner with ${winnerPoints} points`);
    }else{
        console.log(`${nameFirstPlayr} has ${sumFirstPlayer} points`);
        console.log(`${nameSecondPlayer} has ${sumSecondPlayer} points`);
    }
}
solve(["Desi",
"Niki",
"7",
"5",
"3",
"4",
"3",
"3",
"5",
"3"])