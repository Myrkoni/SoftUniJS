function solve(input) {
    let index = 0;
    let capacity = Number(input[index]);
    index++;
    let fens = Number(input[index]);
    index++

    let countA = 0;
    let countB = 0;
    let countV = 0;
    let countG = 0;

    for (let i = 0; i < fens; i++) {
        let sector = input[index];
        index++;
        switch (sector) {
            case "A":
                countA++;
                break;
            case "B":
                countB++;
                break;
            case "V":
                countV++;
                break;
            case "G":
                countG++
                break;
        }
    }
    console.log(`${((countA / fens) * 100).toFixed(2)}%`);
    console.log(`${((countB / fens) * 100).toFixed(2)}%`);
    console.log(`${((countV / fens) * 100).toFixed(2)}%`);
    console.log(`${((countG / fens) * 100).toFixed(2)}%`);
    console.log(`${((fens / capacity) * 100).toFixed(2)}%`);
    
}
solve([76,
    10,
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B"])