function solve(input){
    let temperatura = Number(input[0]);
    let timeOfday = input[1];
    let outfit = "";
    let shoes = "";

    switch(timeOfday){
        case "Morning":
            if(temperatura <= 18){
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            }else if(temperatura <= 24){
                outfit = "Shirt";
                shoes = "Moccasins";
            }else if(temperatura > 24){
                outfit = "T-Shirt";
                shoes = "Sandals";
            }
            break;
            case "Afternoon":
                if(temperatura <= 18){
                    outfit = "Shirt";
                    shoes = "Moccasins";
                }else if(temperatura <= 24){
                    outfit = "T-Shirt";
                    shoes = "Sandals";
                }else if(temperatura > 24){
                    outfit = "Swim Suit";
                    shoes = "Barefoot";
                }
                break;
                case "Evening":
                    outfit = "Shirt";
                    shoes = "Moccasins";
                    break;
        
        }
        console.log(`It's ${temperatura} degrees, get your ${outfit} and ${shoes}.`)
}
solve(["22",

"Afternoon"])