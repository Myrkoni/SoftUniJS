function coffeeLover(input){
    let stock = input.shift().split(" ");
    let count = Number(input.shift());

    for(let i = 0; i < count; i++){
        let [commad, item1, item2] = input[i].split(" ");

        if(commad === "Include"){
            stock.push(item1);
        }
        if(commad === "Remove"){
            item2 = Number(item2)
            if(stock.length >= item2){
                if(item1 === "first"){
                    stock.splice(0, item2);
                }else{
                    stock.splice(stock.length - item2, item2);
                }
            }
        }
        if(commad === "Prefer"){
            item1 = Number(item1);
            item2 = Number(item2);
            if(item1 >= 0 && item1 < stock.length && item2 >= 0 && item2 < stock.length){
                let firstEl = "";
                let secondEl = "";
                if(item2 > item1){
                    secondEl = stock.splice(item2, 1).join("");
                    firstEl = stock.splice(item1, 1).join("");
                    stock.splice(item1, 0, secondEl);
                    stock.splice(item2, 0, firstEl);
                }else{
                    secondEl = stock.splice(item1, 1).join("");
                    firstEl = stock.splice(item2, 1).join("");
                    stock.splice(item2, 0, secondEl);
                    stock.splice(item1, 0, firstEl);
                }
                
            } 
        }
        if(commad === "Reverse"){
            stock.reverse();
        }
    }
    console.log("Coffees:");
    console.log(stock.join(" "))
}
coffeeLover(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee", "5", "Include TurkishCoffee", "Remove first 2", "Remove last 1", "Prefer 3 1", "Reverse"])