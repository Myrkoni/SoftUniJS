function solve(input){
    let mesec = input[0];
    let nightCount = Number(input[1]);
    let priceStudio = 0;
    let priceApartment = 0;

    if(mesec === "May" || mesec === "October"){
        if(nightCount > 7 && nightCount <= 14){
            priceStudio = 50 * 0.95;
            priceApartment = 65;
        }else if(nightCount > 14){
            priceStudio = 50 * 0.70;
            priceApartment = 65 * 0.90;
        }else{
            priceStudio = 50;
            priceApartment = 65;
        }
        
    }else if(mesec === "June" || mesec === "September"){
        if(nightCount > 14){
            priceStudio = 75.20 * 0.80;
            priceApartment = 68.70 * 0.90;
        }else{
            priceStudio = 75.20;
            priceApartment = 68.70;
        }
    }else if(mesec === "July" || mesec === "August"){
        if(nightCount > 14){
            priceStudio = 76;
            priceApartment = 77 * 0.90;
        }else{
            priceStudio = 76;
            priceApartment = 77;
        }
    }
    console.log(`Apartment: ${(priceApartment * nightCount).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceStudio * nightCount).toFixed(2)} lv.`);
}
solve(["May",

"15"])