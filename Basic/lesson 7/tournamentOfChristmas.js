function solve(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let sport = input[index];
    index++;

    let win = 0;
    let lose = 0;
    let totalWin = 0;
    let totalLose = 0;
    let moneyPerDey = 0;
    let totalMoney = 0;

    for (let i = 0; i < days; i++) {
        while (sport !== "Finish") {
            let winOrLose = input[index];
            index++;
            switch (winOrLose) {
                case "win":
                    win++;
                    moneyPerDey += 20;
                    break;
                case "lose":
                    lose++;
                    break;
            }
            sport = input[index];
            index++;

        }
        if (win > lose) {
            moneyPerDey = moneyPerDey * 1.10;
        }
        totalMoney += moneyPerDey;
        totalWin += win;
        totalLose += lose;
        win = 0;
        lose = 0;
        moneyPerDey = 0;
        sport = input[index];
        index++;

    }
    if (totalWin > totalLose) {
        console.log(`You won the tournament! Total raised money: ${(totalMoney = totalMoney * 1.20).toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}
solve(["2",
"volleyball",
"win",
"football",
"lose",
"basketball",
"win",
"Finish",
"golf",
"win",
"tennis",
"win",
"badminton",
"win",
"Finish"])