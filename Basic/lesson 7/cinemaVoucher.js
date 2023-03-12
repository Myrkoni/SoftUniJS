function solve(input) {
    let voucher = Number(input[0]);
    let index = 1;
    let purchase = input[index];
    index++;
    let total = 0;
    let countTickets = 0;
    let countPurchase = 0;
    let isEnd = false;

    while (purchase !== "End") {
        if (purchase.length > 8) {
            total += purchase.charCodeAt(0) + purchase.charCodeAt(1);
            if (total > voucher) {
                isEnd = true;
                break;
            }
            countTickets++
        } else if (purchase.length <= 8) {
            total += purchase.charCodeAt(0);
            if (total > voucher) {
                isEnd = true;
                break;
            }
            countPurchase++;
        }
        if (isEnd) {
            break;
        }
        purchase = input[index];
        index++;
    }
    console.log(`${countTickets}`);
    console.log(`${countPurchase}`);

}
solve(["300",
    "Captain Marvel",
    "popcorn",
    "Pepsi"])