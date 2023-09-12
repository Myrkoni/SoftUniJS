function deserializeString(data) {
    let result = {}
    let string = ''
    for (let el of data) {
        if(el === 'end'){
            break;
        }
        let command = el.split(':');
        let char = command[0]
        let indexes = String(command[1]).split('/');

        for (let index of indexes) {
                result[index] = char;
        }
    }

    let sortResult = Object.keys(result).sort((a, b) => a - b);

    for (let key of sortResult) {
        string += `${result[key]}`
    }
    console.log(string)
}
deserializeString([
    'a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']
)