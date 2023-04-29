function solve(input){
    let mesec = input[0];
    let nightCount = Number(input[1]);
    let priceStudio = 0;
    let priceApartment = 0;

    switch(mesec){
        case "May":
            if(nightCount > 7 && nightCount <= 14){
                priceStudio = (nightCount * 50) * 0.95;
                priceApartment = nightCount * 65;
            }else if(nightCount > 14){
                priceStudio = (nightCount * 50) * 0.70;
                priceApartment = (nightCount * 65) * 0.90; 
            }else{
                priceStudio = nightCount * 0.70;
                priceApartment = nightCount * 50;
            }
            break;
            case "October":
                if(nightCount > 7 && nightCount <= 14){
                    priceStudio = (nightCount * 50) * 0.95;
                    priceApartment = nightCount * 65;
                }else if(nightCount > 14){
                    priceStudio = (nightCount * 65) * 0.70;
                    priceApartment = (nightCount * 50) * 0.90; 
                }else{
                    priceStudio = nightCount * 65;
                    priceApartment = nightCount * 50;
                }
                break;
                case "June":
                if(nightCount > 14){
                    priceStudio = (nightCount * 75.20) * 0.80;
                    priceApartment = (nightCount * 68.70) * 0.90; 
                }else{
                    priceStudio = nightCount * 75.20;
                    priceApartment = nightCount * 68.70;
                }
                break;
                case "September":
                if(nightCount > 14){
                    priceStudio = (nightCount * 75.20) * 0.80;
                    priceApartment = (nightCount * 68.70) * 0.90; 
                }else{
                    priceStudio = nightCount * 75.20;
                    priceApartment = nightCount * 68.70;
                }
                break;
                case " Juli":
                    if(nightCount > 14){
                        priceStudio = nightCount * 76;
                        priceApartment = (nightCount * 77) * 0.90;
                    }else{
                        priceStudio = nightCount * 76;
                        priceApartment = nightCount *77;
                    }
                    break;
                    case "August":
                    if(nightCount > 14){
                        priceStudio = nightCount * 76;
                        priceApartment = (nightCount * 77) * 0.90;
                    }else{
                        priceStudio = nightCount * 76;
                        priceApartment = nightCount *77;
                    }
                    break;
    }
    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`)
}
solve(["May", "15"])