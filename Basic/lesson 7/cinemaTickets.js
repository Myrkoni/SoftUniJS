function solve(input) {
    let index = 0;
    let movie = input[index];
    index++;
    let countUsedTicket = 0;
    let totalUsedTicket = 0;
    let countStudent = 0;
    let countStandart = 0;
    let countKid = 0;

    while (movie !== "Finish") {
        let countTicket = Number(input[index]);
        index++;
        for (let e = 1; e <= countTicket; e++) {
            let typeTicket = input[index];
            index++;
            if (typeTicket === "End") {
                break;
            }
            switch (typeTicket) {
                case "student":
                    countStudent++;
                    break;
                case "standard":
                    countStandart++
                    break;
                case "kid":
                    countKid++
                    break;
            }
            countUsedTicket++;
        }
        console.log(`${movie} - ${((countUsedTicket / countTicket) * 100).toFixed(2)}% full.`);
        countUsedTicket = 0;
        movie = input[index];
        index++;
    }
    totalUsedTicket = countKid + countStandart + countStudent;
    console.log(`Total tickets: ${totalUsedTicket}`);
    console.log(`${((countStudent / totalUsedTicket) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((countStandart / totalUsedTicket) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((countKid / totalUsedTicket) * 100).toFixed(2)}% kids tickets.`);
}
solve(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])