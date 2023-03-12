function solve(input){
    let nameAeroport = input[0];
    let countTicketAdults = Number(input[1]);
    let countChildrenTickets = Number(input[2]);
    let netPriceAdults = Number(input[3]);
    let priceService = Number(input[4]);

    let totalIncome = (netPriceAdults * 0.30) * countChildrenTickets + countTicketAdults * netPriceAdults;
    totalIncome += countChildrenTickets * priceService + countTicketAdults * priceService;
    totalIncome *= 0.20;

    console.log(`The profit of your agency from ${nameAeroport} tickets is ${totalIncome.toFixed(2)} lv.`);

}
solve(["Ryanair",
"60",
"23",
"158.96",
"39.12"])