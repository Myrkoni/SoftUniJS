function solve(input){
    let index = 0;
    let months = Number(input[index]);
    index++;
    let current = Number(input[index]);
    index++;
    let totalCurrent = 0;

    for(let i = 0; i < months; i++){
        totalCurrent += current;

        current = Number(input[index]);
        index++;
    }
    let other = ((20 * months) + (15 * months) + totalCurrent) * 1.20;
    console.log(`Electricity: ${totalCurrent.toFixed(2)} lv`);
    console.log(`Water: ${(20 * months).toFixed(2)} lv`);
    console.log(`Internet: ${(15 * months).toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${(((20 * months) + (15 * months) + totalCurrent + other) / months).toFixed(2)} lv`);
}
solve([5,
    68.63,
    89.25,
    132.53,
    93.53,
    63.22])