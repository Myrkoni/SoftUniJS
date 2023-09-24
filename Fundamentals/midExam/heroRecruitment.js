function heroRecruitment(data) {
    let heroes = {}
    let command = data.shift();

    while (command !== 'End') {
        let action = command.split(' ');
        if (action[0] === 'Enroll') {
            if (heroes.hasOwnProperty(action[1])) {
                console.log(`${action[1]} is already enrolled.`);
            } else {
                heroes[action[1]] = new Set;
            }
        }
        if (action[0] === 'Learn') {
            if (heroes.hasOwnProperty(action[1])) {
                if (heroes[action[1]].has(action[2])) {
                    console.log(`${action[1]} has already learnt ${action[2]}.`);
                } else {
                    heroes[action[1]].add(action[2]);
                }
            } else {
                console.log(`${action[1]} doesn't exist.`)
            }
        }
        if (action[0] === 'Unlearn') {
            if (heroes.hasOwnProperty(action[1])) {
                if (heroes[action[1]].has(action[2])) {
                    heroes[action[1]].delete(action[2]);
                } else {
                    console.log(`${action[1]} doesn't know ${action[2]}.`)
                }
            }else{
                console.log(`${action[1]} doesn't exist.`)
            }
        }
        command = data.shift();
    }
    console.log(`Heroes:`);
    let heroesArr = Object.keys(heroes);
    for(let key of heroesArr){
        let spell = '';
        let arrSpell = Array.from(heroes[key]);
        for(let i = 0; i < arrSpell.length; i++){
            if(i === arrSpell.length - 1){
                spell += ` ${arrSpell[i]}`
            }else{
            spell += ` ${arrSpell[i]},`
            }
        }
        console.log(`== ${key}:${spell}`)
    }

}

heroRecruitment(["Enroll Stefan",

"Enroll Peter",

"Enroll John",

"Learn Stefan Spell",

"Learn Peter Dispel",

"End"])