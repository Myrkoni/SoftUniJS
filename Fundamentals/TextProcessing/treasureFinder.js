function treasureFinder(data) {

    let counts = data.shift().split(' ').map(Number);
    let command = data.shift();

    while (command !== 'find') {
        let result = '';
        let index = 0;
        for (let el of command) {
            if (index >= counts.length) {
                index = 0;
            }
            let numberOfEl = el.charCodeAt(0) - Number(counts[index]);
            result += String.fromCharCode(numberOfEl)
            index++;
        }
        command = data.shift();
        let type = result.substring(result.indexOf('&') + 1, result.lastIndexOf('&'));
        let coordinates = result.substring(result.indexOf('<') + 1, result.lastIndexOf('>'));
        console.log(`Found ${type} at ${coordinates}`);
    }

}
treasureFinder(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"])