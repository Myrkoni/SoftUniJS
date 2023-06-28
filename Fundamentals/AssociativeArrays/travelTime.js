function travelTime(input){
    let travelCountry = new Map();

    for(let el of input){
        let [country, city, price] = el.split(" > ");
        if(!travelCountry.has(country)){
            travelCountry.set(country, new Map());
        }
        if(!travelCountry.get(country).has(city)){
            travelCountry.get(country).set(city, price);
        }else{
            let min = 0;
            let arrCity = Array.from(travelCountry.get(country));
            if(arrCity[0][1] >= price){
                min = price;
                travelCountry.get(country).set(city, min);
            }
            
        }
    }
    let sortCounty = Array.from(travelCountry).sort((a, b) => a[0].localeCompare(b[0]));
    
    for(let country of sortCounty){
        let result = `${country[0]} ->`;
        let sortPrice = Array.from(country[1]).sort((a, b) => a[1] - b[1]);
        
        for(let price of sortPrice){
            result +=" " + price[0] + " " + "->" + " " + price[1] ;
        }
        console.log(result)
    }   
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    )