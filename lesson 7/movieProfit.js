function solve(input){
    let nameMovie = input[0];
    let countDays = Number(input[1]);
    let countTickets = Number(input[2]);
    let priceTicket = Number(input[3]);
    let percent = Number(input[4]);

    let totalMoney = (priceTicket * countTickets * countDays) * ((100 - percent) / 100);

    console.log(`The profit from the movie ${nameMovie} is ${totalMoney.toFixed(2)} lv.`);
}
solve(["Python Basics",
"40",
"34785",
"10.45",
"14"])