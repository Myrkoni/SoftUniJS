function melrahShake(data) {
    let string = data[0];
    let pattern = data[1];

    while (string.includes(pattern)) {
        string = string.replaceAll(pattern, '')
        let charPatern = pattern.split('').splice(pattern.length / 2, 1).join('');
        pattern = pattern.replace(charPatern, '')
        console.log('Shaked it.');
    }
    console.log('No shake.')
    console.log(string)

}
melrahShake(['##mtm!!mm.mm*mtm.#',
'mtm']
)