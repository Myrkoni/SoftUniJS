function solve(input) {
    let index = 0;
    let movie = input[index];
    index++;

    let countMovie = 0;
    let sum1 = 0;
    let sum2 = 0;
    let movie2 = "";

    while (movie != "STOP") {
        countMovie++;
        if (countMovie >= 7) {
            break;
        }

        for (let i = 0; i < movie.length; i++) {
            let point = movie.charCodeAt(i);
            if (point >= 65 && point <= 90) {
                point = point - movie.length;
            } else if (point >= 97 && point <= 122) {
                point = point - movie.length * 2;
            }
            sum1 += point;
        }
        if (sum1 > sum2) {
            sum2 = sum1;
            movie2 = movie;
        }
        sum1 = 0;
        movie = input[index];
        index++;

    }
    if (countMovie >= 7) {
        console.log("The limit is reached.");
    }
    console.log(`The best movie for you is ${movie2} with ${sum2} ASCII sum.`);
}
solve(["Wrong turn",
    "The maze",
    "Area 51",
    "Night Club",
    "Ice age",
    "Harry Potter",
    "Wizards"])