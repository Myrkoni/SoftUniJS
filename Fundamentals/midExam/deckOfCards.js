function deckOfCards(input) {
    let cards = input.shift().split(", ");
    let count = Number(input.shift());

    for (let i = 0; i < count; i++) {
        let [commad, item1, item2] = input[i].split(", ");

        if (commad === "Add") {
            if (cards.includes(item1)) {
                console.log("Card is already in the deck");
            } else {
                cards.push(item1);
                console.log("Card successfully added");
            }
        }
        if (commad === "Remove") {
            if(cards.includes(item1)){
                cards.splice(cards.indexOf(item1), 1);
                console.log("Card successfully removed");
            }else{
                console.log("Card not found");
            }            
        }
        if(commad === "Remove At"){
            if(item1 >= 0 && item1 < cards.length){
                cards.splice(item1, 1);
                console.log("Card successfully removed")
            }else{
                console.log("Index out of range");
            }
        }
        if(commad === "Insert"){
            if(item1 >= 0 && item1 < cards.length){
                if(cards.includes(item2)){
                    console.log("Card is already added")
                }else{
                    cards.splice(item1, 0, item2);
                    console.log("Card successfully added");
                }
            }else{
                console.log("Index out of range");
            }
        }
    }
    console.log(cards.join(", "))

}
deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs",

    "3",

    "Add, King of Diamonds",

    "Insert, 2, Jack of Spades",

    "Remove, Ace of Diamonds"])