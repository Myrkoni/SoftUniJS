function theImitationGame(data) {
    let string = data.shift();
    let command = data.shift();

    while (command !== 'Decode') {
        let action = command.split('|');

        if (action[0] === 'Move') {
            let chars = string.substring(0, action[1]);
            let chars1 = string.substring(action[1])
            string = chars1 + chars;
        }
        if (action[0] === 'Insert') {
            let chars = string.substring(0, action[1]);
            let chars1 = string.substring(action[1]);
            string = chars + action[2] + chars1
        }
        if (action[0] === 'ChangeAll') {
            let result = string.split('');
            for(let i = 0; i < result.length; i++){
                if(action[1] === result[i]){
                    result.splice(i, 1, action[2]);
                }
            }
            string = result.join('');
        }


        command = data.shift()
    }
    console.log(`The decrypted message is: ${string}`);

}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])