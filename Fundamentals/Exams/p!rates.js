function pirates(data) {
    let cities = {};
    let command = data.shift();
    while (command !== 'Sail') {
        let action = command.split('||');

        if (cities.hasOwnProperty(action[0])) {
            cities[action[0]]['population'] += Number(action[1]);
            cities[action[0]]['gold'] += Number(action[2]);

        } else {
            cities[action[0]] = {
                population: Number(action[1]),
                gold: Number(action[2]),
            }
        }
        command = data.shift();
    }
    while (command !== 'End') {
        let action = command.split('=>');
        if (action[0] === 'Plunder') {
            cities[action[1]]['population'] -= Number(action[2]);
            cities[action[1]]['gold'] -= Number(action[3]);
            console.log(`${action[1]} plundered! ${action[3]} gold stolen, ${action[2]} citizens killed.`);
            if (cities[action[1]]['population'] <= 0 || cities[action[1]]['gold'] <= 0) {
                console.log(`${action[1]} has been wiped off the map!`);
                delete cities[action[1]];
            }
        }
        if (action[0] === 'Prosper') {
            if (action[2] < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                cities[action[1]]['gold'] += Number(action[2]);
                console.log(`${Number(action[2])} gold added to the city treasury. ${action[1]} now has ${cities[action[1]]['gold']} gold.`)
            }
        }

        command = data.shift();
    }
    let keys = Object.keys(cities);
    console.log(`Ahoy, Captain! There are ${keys.length} wealthy settlements to go to:`);

    for(let key of keys){
        console.log(`${key} -> Population: ${cities[key]['population']} citizens, Gold: ${cities[key]['gold']} kg`);
    }
}
pirates(["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])