function makeADictionary(data){
    let result = {};

    for(let el of data){
        let obj = JSON.parse(el);
        Object.assign(result, obj);
    }

    let sortKey = Object.keys(result).sort((a, b) => a.localeCompare(b));
    
    for(let key of sortKey){
        console.log(`Term: ${key} => Definition: ${result[key]}`)
    }
}

makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])