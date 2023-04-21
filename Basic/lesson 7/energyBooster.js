function solve(input){
    let fruit = input[0];
    let set = input[1];
    let countSets = Number(input[2]);
    let price = 0;

    switch(fruit){
        case "Watermelon":
            if(set === "small"){
                price = 56 * 2 * countSets;
            }else{
                price = 28.70 * 5 * countSets;
            }
            break;
        case "Mango":
            if(set === "small"){
                price = 36.66 * 2 * countSets;
            }else{
                price = 19.60 * 5 * countSets;
            }
            break;
        case "Pineapple":
            if(set === "small"){
                price = 42.10 * 2 * countSets;
            }else{
                price = 24.80 * 5 * countSets;
            }
            break;
        case "Raspberry": if(set === "small"){
            price = 20 * 2 * countSets;
        }else{
            price = 15.20 * 5 * countSets;
        }
        break;
    }
    if(price >= 400 && price <= 1000){
        price = price * 0.85;
    }
    if(price > 1000){
        price = price / 2;
    }
    console.log(`${price.toFixed(2)} lv.`)
}
solve(["Watermelon",
    "big",
    4
    ])