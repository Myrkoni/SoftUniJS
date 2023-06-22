function arenaTier(input) {
    let gladiators = {};
    let gladiatorsTotalSkill = {};

    for (let el of input) {
        if (el === 'Ave Cesar') {
            break;
        }
        let command = el.split(" ");
        if (command[1] === "->") {
            let gladiatorName = command[0];
            let technique = command[2];
            let skill = Number(command[4]);
            if (!gladiators.hasOwnProperty(gladiatorName)) {
                gladiators[gladiatorName] = {};
                gladiatorsTotalSkill[gladiatorName] = 0;
            }
            if (!gladiators[gladiatorName].hasOwnProperty(technique)) {
                gladiators[gladiatorName][technique] = skill;
                gladiatorsTotalSkill[gladiatorName] += skill
            } else {
                if (gladiators[gladiatorName][technique] < skill) {
                    gladiatorsTotalSkill[gladiatorName] += skill;
                }
            }
        } else {
            let firstGladiator = command[0];
            let secondGladiator = command[2];
            if (gladiators.hasOwnProperty(firstGladiator) && gladiators.hasOwnProperty(secondGladiator)) {
                let isFight = false;
                let isFirstWin = true;
                let techniqueFirstGladiator = Object.keys(gladiators[firstGladiator]);
                for (let key of techniqueFirstGladiator) {
                    if (gladiators[secondGladiator].hasOwnProperty(key)) {
                        isFight = true;
                    }
                    if (isFight) {
                        if (gladiatorsTotalSkill[firstGladiator] < gladiatorsTotalSkill[secondGladiator]) {
                            isFirstWin = false;
                        }
                        if (isFirstWin) {
                            delete gladiators[secondGladiator];
                            delete gladiatorsTotalSkill[secondGladiator];
                            break;
                        } else {
                            delete gladiators[firstGladiator];
                            delete gladiatorsTotalSkill[firstGladiator];
                            break;
                        }
                    }
                }
            }
        }
    }
    let sortTotalSkill = Object.entries(gladiatorsTotalSkill).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    
    for(let [gladiator, totalSkill] of sortTotalSkill){
        console.log(`${gladiator}: ${totalSkill} skill`);
        let sortSkill = Object.entries(gladiators[gladiator]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for(let [technique, skill] of sortSkill){
            console.log(`- ${technique} <!> ${skill}`);
        }
    }
    
}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
    ])