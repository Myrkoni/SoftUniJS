function solve(input) {
    let index = 0;
    let filmName = input[index];
    index++;
    let freeSeats = Number(input[index]);
    index++;
    let ticket = input[index];
    index++
    let countTiket = 0;
    let isFull = false;
    let countStudent = 0;
    let countStandard = 0;
    let countKid = 0;
    let totalTikets = 0;

    while (filmName !== "Finish") {
        while (ticket !== "End") {
            switch (ticket) {
                case "student":
                    countStudent++
                    break;
                case "standard":
                    countStandard++;
                    break;
                case "kid":
                    countKid++;
                    break;
            }
            countTiket++;
            totalTikets++;
            if (countTiket >= freeSeats) {
                isFull = true;
                break;
            }
            ticket = input[index];
            index++;
        }
        console.log(`${filmName} - ${((countTiket / freeSeats) * 100).toFixed(2)}% full.`);

        filmName = input[index];
        index++;
        freeSeats = Number(input[index]);
        index++
        ticket = input[index];
        index++;
        countTiket = 0;
    }
    console.log(`Total tickets: ${totalTikets}`)
    console.log(`${(countStudent / totalTikets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(countStandard / totalTikets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(countKid / totalTikets * 100).toFixed(2)}% kids tickets.`);

}
solve(["The Matrix",

    "20",

    "student",

    "standard",

    "kid",

    "kid",

    "student",

    "student",

    "standard",

    "student",

    "End",

    "The Green Mile",

    "17",

    "student",

    "standard",

    "standard",

    "student",

    "standard",

    "student",

    "End",

    "Amadeus",

    "3",

    "standard",

    "standard",

    "standard",

    "Finish"])