function heartDelivery(data) {
    let neighborhood = data.shift().split("@").map(a => Number(a));
    let commad = data.shift();
    let houseIndex = 0;
    let isValentines = true;

    while (commad !== "Love!") {
        let [jump, jumpCount] = commad.split(" ");
        jumpCount = Number(jumpCount);
        houseIndex += jumpCount;
        
        if (houseIndex >= neighborhood.length) {
            houseIndex = 0;
        }

        if(neighborhood[houseIndex] === 0){
            console.log(`Place ${houseIndex} already had Valentine's day.`);
            commad = data.shift();
            continue;
        }

        neighborhood[houseIndex] -= 2;

        if(neighborhood[houseIndex] === 0){
            console.log(`Place ${houseIndex} has Valentine's day.`);
        }

        commad = data.shift();
    }
    let count = 0;
    console.log(`Cupid's last position was ${houseIndex}.`);

    for(let el of neighborhood){
        if(el > 0){
            count++;
        }
    }
    if(count > 0){
        isValentines = false;
    }
    if(isValentines){
        console.log("Mission was successful.");
    }else{
        console.log(`Cupid has failed ${count} places.`);
    }

}
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])