function aMinerTask(input) {
    let resource = {};

    for (let i = 0; i < input.length; i += 2) {
        if (!resource.hasOwnProperty(input[i])) {
            resource[input[i]] = 0;
        }
        resource[input[i]]  += Number(input[i + 1]);
    }

    for(let key of Object.keys(resource)){
        console.log(`${key} -> ${resource[key]}`);
    }

}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
])