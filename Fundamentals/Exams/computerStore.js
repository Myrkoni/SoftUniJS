function computerStore(array) {
    let price = 0;
    let isSpecial = false;
    for (let el of array) {
        if (el === "special" || el === "regular") {
            if (el === "special") {
                isSpecial = true;
            }
        } else {
            if (el >= 0) {
                price += Number(el)
            } else {
                console.log("Invalid price!");
            }
        }
    }
    let totalPrice = price * 1.20;
    let taxes = totalPrice - price
    if(isSpecial){
        totalPrice *= 0.90;
    }
    if(totalPrice === 0){
        console.log("Invalid order!")
    }else{
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${price.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------")
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}

computerStore([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
])