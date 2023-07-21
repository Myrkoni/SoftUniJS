function thePianist(data) {
    let countTones = data.shift();
    let result = {}
    let command = data.shift();
    for (let i = 0; i < countTones; i++) {
        let action = command.split('|');
        result[action[0]] = {
            'compositor': action[1],
            'key': action[2]
        };

        command = data.shift();
    }
    while (command !== 'Stop') {
        let action = command.split("|");
        if (action[0] === 'Add') {
            if (result.hasOwnProperty(action[1])) {
                console.log(`${action[1]} is already in the collection!`);
            } else {
                result[action[1]] = {
                    'compositor': action[2],
                    'key': action[3]
                };
                console.log(`${action[1]} by ${action[2]} in ${action[3]} added to the collection!`);
            }
        }
        if (action[0] === 'Remove') {
            if (result.hasOwnProperty(action[1])) {
                delete result[action[1]];
                console.log(`Successfully removed ${action[1]}!`);
            } else {
                console.log(`Invalid operation! ${action[1]} does not exist in the collection.`);
            }
        }
        if (action[0] === 'ChangeKey') {
            if (result.hasOwnProperty(action[1])) {
                result[action[1]]['key'] = action[2];
                console.log(`Changed the key of ${action[1]} to ${action[2]}!`);
            }else{
                console.log(`Invalid operation! ${action[1]} does not exist in the collection.`);
            }
        }
        command = data.shift();
    }
    let arrResult = Object.keys(result);

    for(let el of arrResult){
        console.log(`${el} -> Composer: ${result[el]['compositor']}, Key: ${result[el]['key']}`)
    }
}

thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ])