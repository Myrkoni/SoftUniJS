function solve(input) {
    index = 0;
    let name = input[index];
    index++;
    let field = input[index];
    index++;
    let points = Number(input[index]);
    index++
    let startPoints = 301;
    let missedShot = 0;
    let successfullShot = 0;
    let isFinish = false;
    while (field !== "Retire") {
        switch (field) {
            case "Single":
                if (points > startPoints) {
                    missedShot++;
                } else {
                    startPoints -= points;
                    successfullShot++;
                }
                break;
            case "Double":
                points = points * 2;
                if (points > startPoints) {
                    missedShot++;
                } else {
                    startPoints -= points;
                    successfullShot++;
                }
                break;
            case "Triple":
                points = points * 3;
                if (points > startPoints) {
                    missedShot++;
                } else {
                    startPoints -= points;
                    successfullShot++;
                }
                break;
            default:
                break;
        }
        if (startPoints === 0) {
            isFinish = true;
            break;
        }
        field = input[index];
        index++;
        points = Number(input[index]);
        index++
    }
    if (isFinish) {
        console.log(`${name} won the leg with ${successfullShot} shots.`);
    } else {
        console.log(`${name} retired after ${missedShot} unsuccessful shots.`)
    }

}
solve([
    'Rob Cross', 'Triple', '20',
    'Triple', '20', 'Triple',
    '20', 'Triple', '20',
    'Double', '20', 'Triple',
    '20', 'Double', '5',
    'Triple', '10', 'Double',
    '6', 'Retire', ''
])