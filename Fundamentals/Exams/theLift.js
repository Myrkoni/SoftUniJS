function theLift(arr) {
    let people = Number(arr.shift());
    let lift = arr.shift().split(" ").map(Number);

    for (let i = 0; i < lift.length; i++) {
        if (people <= 0) {
            break;
        }
        let peopleOn = 4 - lift[i];
        if (people >= peopleOn) {
            lift[i] += peopleOn;
            people -= peopleOn;
        } else {
            lift[i] += people;
            people = 0;
        }

    }

    if (lift.reduce((a, b) => a + b, 0) === lift.length * 4 && people === 0) {
        console.log(`${lift.join(" ")}`);
    } else if (lift.reduce((a, b) => a + b, 0) === lift.length * 4 && people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
        console.log(`${lift.join(" ")}`);
    } else {
        console.log(`The lift has empty spots!`);
        console.log(`${lift.join(" ")}`);
    }
}

theLift([
    "-2",
    "0 2 0"
])