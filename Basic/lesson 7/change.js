function solve(input) {
    let countBitcoin = Number(input[0]);
    let countYuan = Number(input[1]);
    let commission = Number(input[2]);

    let euro = (countBitcoin * 1168 + (countYuan * 0.15) * 1.76) / 1.95;

    let total = euro * (100 - commission) / 100;
    console.log(total.toFixed(2));
}
solve([1, 5, 5])