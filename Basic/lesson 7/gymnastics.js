function solve(input) {
    let country = input[0];
    let device = input[1];

    let totalScore = 0;

    if (country === "Russia") {
        if (device === "ribbon") {
            totalScore = 9.100 + 9.400;
        } else if (device === "hoop") {
            totalScore = 9.300 + 9.800;
        } else if (device === "rope") {
            totalScore = 9.600 + 9.000;
        }
    } else if (country === "Bulgaria") {
        if (device === "ribbon") {
            totalScore = 9.600 + 9.400;
        } else if (device === "hoop") {
            totalScore = 9.550 + 9.750;
        } else if (device === "rope") {
            totalScore = 9.500 + 9.400;
        }
    } else if (country === "Italy") {
        if (device === "ribbon") {
            totalScore = 9.200 + 9.500;
        } else if (device === "hoop") {
            totalScore = 9.450 + 9.350;
        } else if (device === "rope") {
            totalScore = 9.700 + 9.150;
        }
    }

    console.log(`The team of ${country} get ${totalScore.toFixed(3)} on ${device}.`);
    console.log(`${(((20 - totalScore) / 20) * 100).toFixed(2)}%`);
}
solve(["Italy",
    "hoop"])