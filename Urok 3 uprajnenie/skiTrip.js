function solve(input){
    let dayStay = Number(input[0]);
    let typeOfRoom = input[1];
    let evaluation = input[2];

    let roomOnePersone = 18.00;
    let apartment = 25.00;
    let pesidendApartment = 35;
    let price = 0;

    switch(typeOfRoom){
        case "room for one person":
            price = (dayStay - 1) * roomOnePersone;
            break; 
        case "apartment" :
            if(dayStay < 10){
                price = ((dayStay - 1) * apartment) * 0.70;
            }else if(dayStay >= 10 && dayStay <= 15){
                price = ((dayStay - 1) * apartment) * 0.65; 
            }else if(dayStay > 15){
                price = ((dayStay - 1) * apartment) * 0.50;
            }break;
            case "president apartment":
                if(dayStay < 10){
                    price = ((dayStay - 1) * pesidendApartment) * 0.90;
                }else if(dayStay >= 10 && dayStay <= 15){
                    price = ((dayStay - 1) * pesidendApartment) * 0.85; 
                }else if(dayStay > 15){
                    price = ((dayStay - 1) * pesidendApartment) * 0.80;
                }break;
    }
    switch(evaluation){
        case "positive":
            price = price * 1.25;
            break;
            case "negative":
                price = price * 0.90;
    }
    console.log(price.toFixed(2))

}
solve(["14",

"apartment",

"positive"])