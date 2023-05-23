function solve(length, increment) {
    let countIncrement = 0;
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let height = 0;

    for (let i = length; i >= 1; i -= 2) {
        countIncrement++;
        height++;
        if (i <= 2) {
            gold = (i * i) * increment;
        } else {
            if (countIncrement === 5) {
                lapisLazuli += ((i - 1) * 4) * increment;
                countIncrement = 0;
            } else {
                marble += ((i - 1) * 4) * increment;
            }
            stone += ((i - 2) * (i - 2)) * increment;
        }

    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}
solve(12, 1)