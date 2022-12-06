function solve(input){
    let flower = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;
    let totalPrice = 0;

    switch(flower){
        case "Roses":
            price = 5;
            break;
        case "Dahlias":
            price = 3.80;
            break;
        case "Tulips":
            price = 2.80;
            break;
        case "Narcissus":
            price = 3;
            break;
        case "Gladiolus" :
            price = 2.50;
            break;
    }
        totalPrice = numberOfFlowers * price;
        if(flower === "Roses" && numberOfFlowers > 80){
            totalPrice = totalPrice * 0.90;
        }else if(flower === "Dahlias" && numberOfFlowers > 90){
            totalPrice = totalPrice * 0.85;
        }else if(flower === "Tulips" && numberOfFlowers > 80){
            totalPrice = totalPrice * 0.85;
        }else if(flower === "Narcissus" && numberOfFlowers < 120){
            totalPrice = totalPrice * 1.15;
        }else if(flower === "Gladiolus" && numberOfFlowers < 80){
            totalPrice = totalPrice * 1.20;
        }
    if(budget >= totalPrice){
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${flower} and ${(budget-totalPrice).toFixed(2)} leva left.`);
    }else{
        console.log(`Not enough money, you need ${(totalPrice-budget).toFixed(2)} leva more.`)
    }
}
solve(["Tulips",

"88",

"260"])