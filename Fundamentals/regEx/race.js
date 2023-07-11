function race(data) {
    let racers = data.shift().split(', ');
    let names = {};
    for (let racer of racers) {
        names[racer] = 0;
    }
    let regexName = /[A-Za-z]/g;
    let regexPoint = /[0-9]/g;

    let command = data.shift();
    while (command !== "end of race") {
        let sumPoint = 0;
        let nameRacer = command.match(regexName).join('');
        let pointRacer = command.match(regexPoint);
        sumPoint = pointRacer.map(Number).reduce((a, b) => a + b, 0);

        if (names.hasOwnProperty(nameRacer)) {
            names[nameRacer] += sumPoint;
        }
        command = data.shift();
    }

    let sortRacers = Object.entries(names).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortRacers[0][0]}`);
    console.log(`2nd place: ${sortRacers[1][0]}`);
    console.log(`3rd place: ${sortRacers[2][0]}`);

}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])