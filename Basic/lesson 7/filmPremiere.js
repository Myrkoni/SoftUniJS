function solve(input) {
    let movie = input[0];
    let junk = input[1];
    let countTicket = Number(input[2]);
    let price = 0;

    if (movie === "John Wick") {
        switch (junk) {
            case "Drink":
                price = countTicket * 12;
                break;
            case "Popcorn":
                price = countTicket * 15;
                break;
            case "Menu":
                price = countTicket * 19;
                break;
        }
    } else if (movie === "Star Wars") {
        switch (junk) {
            case "Drink":
                price = countTicket * 18;
                break;
            case "Popcorn":
                price = countTicket * 25;
                break;
            case "Menu":
                price = countTicket * 30;
                break;
        }
    } else if (movie === "Jumanji") {
        switch (junk) {
            case "Drink":
                price = countTicket * 9;
                break;
            case "Popcorn":
                price = countTicket * 11;
                break;
            case "Menu":
                price = countTicket * 14;
                break;
        }
    }

    if(movie === "Star Wars" && countTicket >= 4){
        price = price * 0.70;
    }
    if(movie === "Jumanji" && countTicket === 2){
        price = price * 0.85;
    }
    console.log(`Your bill is ${price.toFixed(2)} leva.`)
}
solve(["Jumanji",
"Menu",
"2"])