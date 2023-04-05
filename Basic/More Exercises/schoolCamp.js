function solve(input) {
    let season = input[0];
    let tapeOfGroup = input[1];
    let countStudent = Number(input[2]);
    let countNight = Number(input[3]);

    let sport = "";
    let price = 0;

    switch (season) {
        case "Winter":
            switch (tapeOfGroup) {
                case "boys":
                    sport = "Judo";
                    price = 9.60 * countNight * countStudent;
                    break;
                case "girls":
                    sport = "Gymnastics";
                    price = 9.60 * countNight * countStudent;
                    break;
                case "mixed":
                    sport = "Ski";
                    price = 10.00 * countNight * countStudent;
                    break;
            }
            break;
        case "Spring":
            switch (tapeOfGroup) {
                case "boys":
                    sport = "Tennis";
                    price = 7.20 * countNight * countStudent;
                    break;
                case "girls":
                    sport = "Athletics";
                    price = 7.20 * countNight * countStudent;
                    break;
                case "mixed":
                    sport = "Cycling";
                    price = 9.50 * countNight * countStudent;
                    break;
            }
            break;
        case "Summer":
            switch (tapeOfGroup) {
                case "boys":
                    sport = "Football";
                    price = 15.00 * countNight * countStudent;
                    break;
                case "girls":
                    sport = "Volleyball";
                    price = 15.00 * countNight * countStudent;
                    break;
                case "mixed":
                    sport = "Swimming";
                    price = 20.00 * countNight * countStudent;
                    break;
            }
            break;
    }
    if (countStudent >= 50) {
        price = price * 0.50;
    } else if (countStudent >= 20 && countStudent < 50) {
        price = price * 0.85;
    } else if (countStudent >= 10 && countStudent < 20) {
        price = price * 0.95;
    }
    console.log(`${sport} ${price.toFixed(2)} lv.`)
}
solve(["Winter",
    "mixed",
    9,
    15])