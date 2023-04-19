function solve(input) {
    let man = Number(input[0]);
    let woman = Number(input[1]);
    let table = Number(input[2]);
    let result = "";
    let counter = 0;
    let full = false;

    for (let i = 1; i <= man; i++) {
        for (let e = 1; e <= woman; e++) {
            result += `(${i} <-> ${e}) `;
            counter++;
            if (table <= counter) {
                full = true;
                break;
            }
        }
        if (full) {
            break;
        }
    }
    console.log(result)
}
solve([2, 2, 6])