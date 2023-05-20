function solve(input){
    let month = input[0],
    nightCount = Number(input[1]);

    let studio = 0;
    let apartament = 0;
    let priceStudio = 0;
    let priceApartament = 0;
    let avaibleMoun = ["May", "June", "Juli", "August", "September", "October"]
    if(!avaibleMoun.includes(month)){
        console.log(`Mont not valid`);
        return;
    }
    if(nightCount < 0 || nightCount > 200){
        console.log(`Night not valid`);
        return;
    }
    if(month === "May" || month === "October"){
        studio = 50;
        apartament = 65;
    }else if(month === "June" || month === "September"){
        studio = 75.20;
        apartament = 68.70;
    }else if(month === "Juli" || month === "August"){
        studio = 76;
        apartament = 77;
    }
    priceStudio = studio * nightCount;
    priceApartament = apartament * nightCount;

    if (month === "May" || month === "October"){
        if(nightCount > 7 && nightCount <= 14){
        priceStudio = priceStudio * 0.95;
        }
        if(nightCount > 14 ){
        priceStudio = priceStudio * 0.70;
       }
    }  
    if(nightCount > 14 && (month === "June" || month === "September")){
        priceStudio = priceStudio *0.80;
    } 
    if(nightCount > 14 ){
        priceApartament = priceApartament * 0.90;
    }

    console.log(`Apartment: ${priceApartament.toFixed(2)} lv.`);
    console.log(`Studio: ${priceStudio.toFixed(2)} lv.`);
    
}
solve(["Juli",

"201"])