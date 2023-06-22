function cardGame(input) {
    let players = new Map();
    let powerCard = {
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14,
    }

    let typeCard = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1,
    }

    for (let el of input) {
        let [playerName, cards] = el.split(": ");
        if (!players.has(playerName)) {
            players.set(playerName, new Set());
        }
        let cardArr = cards.split(", ");
        for (let el of cardArr) {
            players.get(playerName).add(el);
        }
    }

    let arrPlayrs = Array.from(players);
    
    for(let el of arrPlayrs){
        let sum = 0;
       let namePlayer = el[0];
       let cards = Array.from(el[1]);
       for(let card of cards){
        let cardsInfo = card.split("");
        let type = cardsInfo.pop();
        let power = cardsInfo.join("");
        sum += Number(powerCard[power]) * Number(typeCard[type]); 
       } 
       console.log(`${namePlayer}: ${sum}`)
       
    }
}
cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
])
