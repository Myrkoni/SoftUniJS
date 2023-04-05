function solve(input) {
    let index = 0;
    let needSum = Number(input[index]);
    index++;
    let pay = input[index];

    let countPay = 0;
    let payCash = 0;
    let payCard = 0;
    let countCash = 0;
    let countCard = 0;
    let end = false;

    while (pay !== "End") {
        pay = Number(input[index]);
        countPay++
        if (countPay < 2) {
            if (pay > 100) {
                console.log("Error in transaction!");
            } else {
                payCash += pay;
                countCash++;
                console.log("Product sold!");
            }
        } else {
            countPay = 0;
            if (pay < 10) {
                console.log("Error in transaction!");
            } else {
                payCard += pay;
                countCard++;
                console.log("Product sold!");
            }
        }
        if (needSum <= payCard + payCash) {
            end = true;
            break;
        }
        index++;
        pay = input[index];
    }
    if (end) {
        console.log(`Average CS: ${(payCash / countCash).toFixed(2)}`);
        console.log(`Average CC: ${(payCard / countCard).toFixed(2)}`);
    } else {
        console.log("Failed to collect required money for charity.");
    }
}
solve([600,
    86,
    150,
    98,
    227,
    "End"
    
    ])