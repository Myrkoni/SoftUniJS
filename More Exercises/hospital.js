function solve(input) {
    index = 0;
    let days = Number(input[index]);
    index++;
    let countPatients = Number(input[index]);
    index++;

    let doctors = 7;
    let treated = 0;
    let untreated = 0;
    let day = 0;

    for (let i = 0; i < days; i++) {
        day++;
        if (day >= 3) {
            if (untreated > treated) {
                doctors++;
                day = 0;
            }
        }
        if (doctors < countPatients) {
            untreated = untreated + (countPatients - doctors);
            treated += doctors;
        } else {
            treated += countPatients;
        }
       
        
        countPatients = Number(input[index]);
        index++;
    }
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);
}
solve([6,
    25,
    25,
    25,
    25,
    25,
    2])