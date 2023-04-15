function solve(input) {
    let countMovie = Number(input[0]);
    let index = 1;
    let movie = input[index];
    index++;
    let rating = Number(input[index]);
    index++;

    let maxRating = Number.MIN_SAFE_INTEGER;
    let minRating = Number.MAX_SAFE_INTEGER;
    let movieMax = "";
    let movieMin = "";
    let totalRating = 0;

    for (let i = 0; i < countMovie; i++) {
        totalRating += rating;
        if (rating > maxRating) {
            maxRating = rating;
            movieMax = movie;
        } else if (rating < minRating) {
            minRating = rating;
            movieMin = movie;
        }
        movie = input[index];
        index++;
        rating = Number(input[index]);
        index++;
    }
    console.log(`${movieMax} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${movieMin} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${(totalRating / countMovie).toFixed(1)}`)
}
solve(["5",
"A Star is Born",
"7.8",
"Creed 2",
"7.3",
"Mary Poppins",
"7.2",
"Vice",
"7.2",
"Captain Marvel",
"7.1"])