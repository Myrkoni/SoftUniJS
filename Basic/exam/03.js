function finalCompetition(input){
    let countDancer = Number(input[0]);
    let countPoints = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let totalMoney = countPoints * countDancer;
    if(place === "Abroad"){
        totalMoney *= 1.5;
    }
    if(place === "Bulgaria" && season === "summer"){
        totalMoney *= 0.95;
    }else if(place === "Bulgaria" && season === "winter"){
        totalMoney *= 0.92;
    }else if(place === "Abroad" && season === "summer"){
        totalMoney *= 0.90;
    }else if(place === "Abroad" && season === "winter"){
        totalMoney *= 0.85;
    }
    let donation = totalMoney * 0.75;
    let moneyPerDancer = (totalMoney - donation) / countDancer;
    
    console.log(`Charity - ${donation.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);

}
finalCompetition(["1",
"89.5",
"summer",
"Abroad"])