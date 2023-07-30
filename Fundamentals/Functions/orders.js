function orders(products, quantity){
    let price = 0;
    if(products === "coffee"){
        price = quantity * 1.50;
    }else if(products === "coke"){
        price = quantity * 1.40;
    }else if(products === "water"){
        price = quantity * 1.00;
    }else if(products === "snacks"){
        price = quantity * 2.00;
    }
    return price.toFixed(2);
}

console.log(orders("water", 5))