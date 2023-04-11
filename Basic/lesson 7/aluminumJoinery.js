function solve(input) {
    let joineryCount = Number(input[0]);
    let typeJoinery = input[1];
    let delivery = input[2];

    let orderValue = 0;

    if (joineryCount < 10) {
        console.log("Invalid order");
    } else {
        if (typeJoinery === "90X130") {
            orderValue = joineryCount * 110;
            if (joineryCount > 30 && joineryCount <= 60) {
                orderValue *= 0.95;
            } else if (joineryCount > 60) {
                orderValue *= 0.92;
            }
        } else if (typeJoinery === "100X150") {
            orderValue = joineryCount * 140;
            if (joineryCount > 40 && joineryCount <= 80) {
                orderValue *= 0.94;
            } else if (joineryCount > 80) {
                orderValue *= 0.90;
            }
        } else if (typeJoinery === "130X180") {
            orderValue = joineryCount * 190;
            if (joineryCount > 20 && joineryCount <= 50) {
                orderValue *= 0.93;
            } else if (joineryCount > 50) {
                orderValue *= 0.88;
            }
        } else if (typeJoinery === "200X300") {
            orderValue = joineryCount * 250;
            if (joineryCount > 25 && joineryCount <= 50) {
                orderValue *= 0.91;
            } else if (joineryCount > 50) {
                orderValue *= 0.86;
            }
        }
        if (delivery === "With delivery") {
            orderValue += 60;
        }
        if (joineryCount > 99) {
            orderValue *= 0.96;
        }

        console.log(`${orderValue.toFixed(2)} BGN`);
    }
}
solve(["105",
    "100X150",
    "With delivery"])