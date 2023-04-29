function grandpaStavri(input) {
    let days = Number(input[0]);
    let index = 1;
    let countLiters = 0;
    let countDegrees = 0;

    for (let i = 0; i < days; i++) {
        let liters = Number(input[index]);
        index++;
        let degrees = Number(input[index]);
        index++

        countLiters += liters;
        countDegrees += degrees * liters;
    }
    let totalDegrees = countDegrees / countLiters
    console.log(`Liter: ${countLiters.toFixed(2)}`);
    console.log(`Degrees: ${totalDegrees.toFixed(2)}`);
    if (totalDegrees < 38) {
        console.log("Not good, you should baking!");
    } else if (totalDegrees >= 38 && totalDegrees <= 42) {
        console.log("Super!");
    } else if (totalDegrees > 42) {
        console.log("Dilution with distilled water!");
    }
}
grandpaStavri(["3",
    "100",
    "45",
    "50",
    "55",
    "150",
    "36"])
