function solve(startingYield) {
    let countday = 0;
    let totalAmount = 0;

    while (startingYield >= 100) {
        countday++;
        totalAmount += startingYield;
        startingYield -= 10;
        totalAmount -= 26;
    }
    if(totalAmount >= 26){
    totalAmount -= 26;
    }

    console.log(countday);
    console.log(totalAmount);
}
solve(450)