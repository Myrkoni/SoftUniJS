function starEnigma(data) {
    let count = Number(data[0]);
    let attack = [];
    let destruction = [];
    let letter = ["s", "t", "a", "r"];
    let regex = /[@!:>\-0-9]*@(?<planet>[A-Z][a-z]+)[@!:>\-0-9]*:(?<population>[0-9]+)[@!:>\-0-9]*!(?<attackType>[AD])![@!:>\-0-9]*->(?<soldier>[0-9]+)/

    for (let i = 1; i <= count; i++) {
        let code = '';
        let charCount = 0;
        for (let char of data[i]) {
            if (letter.includes(char.toLowerCase())) {
                charCount++;
            }
        }
        for (let char of data[i]) {
            let numberOfChar = char.charCodeAt(0);
            code = code.concat(String.fromCharCode(numberOfChar - charCount));
        }
        if (regex.test(code)) {
            let match = code.match(regex);

            if (match.groups.attackType === "A") {
                attack = attack.concat(match.groups.planet);
            } else {
               destruction = destruction.concat(match.groups.planet);
            }
        }
    }

    console.log(`Attacked planets: ${attack.length}`);
    if(attack.length > 0){
        let sortAttack = attack.sort((a, b ) => a.localeCompare(b));
        for(let el of sortAttack){
            console.log(`-> ${el}`);
        }
    }
    console.log(`Destroyed planets: ${destruction.length}`);
    if(destruction.length > 0){
        let sortDestruction = destruction.sort((a, b) =>  a.localeCompare(b));
        for(let el of sortDestruction){
            console.log(`-> ${el}`);
        }
    }
}
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'])