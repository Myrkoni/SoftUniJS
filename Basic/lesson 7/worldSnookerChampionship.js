function solve(input) {
    let stageOfChampionship = input[0];
    let typeTicket = input[1];
    let countTicket = Number(input[2]);
    let photosWithTrophy = input[3];

    let totalPriceTicket = 0;
    let isDiscount = true;

    if (stageOfChampionship === "Quarter final") {
        if (typeTicket === "Standard") {
            totalPriceTicket = 55.50 * countTicket;;
        } else if (typeTicket === "Premium") {
            totalPriceTicket = 105.20 * countTicket;
        } else if (typeTicket === "VIP") {
            totalPriceTicket = 118.90 * countTicket;
        }
    } else if (stageOfChampionship === "Semi final") {
        if (typeTicket === "Standard") {
            totalPriceTicket = 75.88 * countTicket;
        } else if (typeTicket === "Premium") {
            totalPriceTicket = 125.22 * countTicket;
        } else if (typeTicket === "VIP") {
            totalPriceTicket = 300.40 * countTicket;
        }
    } else if (stageOfChampionship === "Final") {
        if (typeTicket === "Standard") {
            totalPriceTicket = 110.10 * countTicket;
        } else if (typeTicket === "Premium") {
            totalPriceTicket = 160.66 * countTicket;
        } else if (typeTicket === "VIP") {
            totalPriceTicket = 400.00 * countTicket;
        }
    }   

    if (totalPriceTicket > 4000) {
        isDiscount = false;   
            totalPriceTicket *= 0.75;
    }else if(totalPriceTicket > 2500){
        totalPriceTicket *= 0.90;
    }

    if (photosWithTrophy === "Y" && isDiscount) {
        totalPriceTicket +=countTicket * 40;
    }

    console.log(totalPriceTicket.toFixed(2))
}
solve(["Semi final",
"VIP",
"9",
"Y"])