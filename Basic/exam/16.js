function goldMine(input) {
    let countLocation = Number(input[0]);
    let index = 1;

    let goldPerLocation = 0;

    for (let i = 0; i < countLocation; i++) {
        let averageYield = Number(input[index]);
        index++;
        let coundDays = Number(input[index]);
        index++;
        for (let j = 0; j < coundDays; j++) {
            let goldPerDay = Number(input[index]);
            index++
            goldPerLocation += goldPerDay;
        }

        let averageGold = goldPerLocation / coundDays;

        if (averageGold >= averageYield) {
            console.log(`Good job! Average gold per day: ${averageGold.toFixed(2)}.`);
        } else {
            console.log(`You need ${(averageYield - averageGold).toFixed(2)} gold.`);
        }

        goldPerLocation = 0;
    }
}
goldMine(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])