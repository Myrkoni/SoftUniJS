function solve(input) {
    let index = 0;
    let destinatio = input[index];
    index++;
    let needSum = Number(input[index]);
    index++;
    let sum = input[index];

    let saveSum = 0;

    while (destinatio !== "End") {
        while (saveSum < needSum) {
            sum = Number(input[index]);
            index++;
            saveSum += sum;
        }
        console.log(`Going to ${destinatio}!`)
        destinatio = input[index];
        index++;
        needSum = Number(input[index]);
        index++;
        saveSum = 0;
    }
}
solve(["France", "2000", "300", "300", "200", "400", "190", "258", "360", "Portugal", "1450", "400", "400", "200", "300", "300", "Egypt", "1900", "1000", "280", "300", "500", "End"])