function solve(input){
    let index = 0;
    let countCustomer = Number(input[index]);
    index++;
    let purchase = input[index];
    index++;
    let countPurchase = 0;
    let price = 0;
    let totalPrice = 0;
    
    for(let i = 1; i <= countCustomer; i++){
        while(purchase !== "Finish"){
            countPurchase++;
            switch(purchase){
                case "basket":
                price += 1.50;
                break;
                case "wreath":
                price += 3.80;
                break;
                case "chocolate bunny":
                price += 7.00;
                break;
            }
            purchase = input[index];
            index++;
        }
        if(countPurchase % 2 === 0){
            price = price * 0.80;
        }
        console.log(`You purchased ${countPurchase} items for ${price.toFixed(2)} leva.`);
        totalPrice += price;
        price = 0;
        countPurchase = 0;
        purchase = input[index];
        index++;
    }
    console.log(`Average bill per client is: ${(totalPrice / countCustomer).toFixed(2)} leva.`);
}
solve([
    '2',
    'basket',
    'wreath',
    'chocolate bunny',
    'Finish',
    'wreath',
    'chocolate bunny',
    'Finish'
  ])