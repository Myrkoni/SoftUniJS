function excursionSale(input) {
    let index = 0;
    let countSea = Number(input[index]);
    index++;
    let countMountain = Number(input[index]);
    index++

    let totalMoney = 0;

    let package = input[index];
    index++;

    while (package !== "Stop") {
        if (package === "sea" && countSea > 0) {
            totalMoney += 680;
            countSea--;
        }
        if (package === "mountain" && countMountain > 0) {
            totalMoney += 499;
            countMountain--;
        }
        if (countSea <= 0 && countMountain <= 0) {
            break;
        }

        package = input[index];
        index++;
    }
    if (countSea <= 0 && countMountain <= 0) {
        console.log("Good job! Everything is sold.");
    }
    console.log(`Profit: ${totalMoney} leva.`);

}
excursionSale(["2",
    "2",
    "sea",
    "mountain",
    "sea",
    "sea",
    "mountain"])