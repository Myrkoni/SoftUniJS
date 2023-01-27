function solve(input){
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let priceDay = 0;
    let total = 0;
    
    for(let i = 1; i <= days; i++){
        for(let e = 1; e <= hours; e++){
            if((i % 2 === 0 ) && (e % 2 !== 0 )){
                priceDay += 2.50;
                total += 2.50;
            }else if((i % 2 !== 0) && (e % 2 === 0)){
                priceDay += 1.25;
                total += 1.25;
            }else{
                priceDay += 1;
                total += 1;
            }
            
        }
        console.log(`Day: ${i} - ${priceDay.toFixed(2)} leva`);
        priceDay = 0;
    }
console.log(`Total: ${total.toFixed(2)} leva`);  
}
solve([5 , 2])