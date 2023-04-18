function solve(input){
    let day = Number(input[0]);
    let hour = Number(input[1]);

    let price = 0;
    let totalSum = 0;

    for(let i = 1; i <= day; i++){

        for(let e = 1; e <= hour; e++){
            if(i % 2 === 0 && e % 2 !== 0){
                price += 2.50;
            }else if(i % 2 !== 0 && e % 2 === 0){
                price += 1.25;
            }else{
                price ++;
            }
        }
        console.log(`Day: ${i} - ${price.toFixed(2)} leva`);
        totalSum += price;
        price = 0;
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);
}
solve(["5",
"2"])