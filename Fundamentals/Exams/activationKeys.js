function activationKeys(data){
    let letter = data.shift().split('');

    let command = data.shift();;
    while(command !== 'Generate'){
        let action = command.split('>>>');

        if(action[0] === 'Contains'){

            if(letter.join('').includes(action[1])){
                console.log(`${letter.join('')} contains ${action[1]}`)
            }else{
                console.log('Substring not found!')
            }
        }
        if(action[0] === 'Flip'){
            let first = Number(action[2]);
            let second = Number(action[3]);
            if(action[1] === 'Upper'){
                if(first < second){
                    for(let i = first; i < second; i++){
                        letter[i] = letter[i].toUpperCase();
                    }
                    console.log(letter.join(''))
                }else{
                    for(let i = second; i < first; i++){
                        letter[i] = letter[i].toUpperCase();
                    }
                    console.log(letter.join(''))
                }
            }else{
                if(first < second){
                    for(let i = first; i < second; i++){
                        letter[i] = letter[i].toLowerCase();
                    }
                    console.log(letter.join(''))
                }else{
                    for(let i = second; i < first; i++){
                        letter[i] = letter[i].toLowerCase();
                    }
                    console.log(letter.join(''))
                }
            }
        }
        if(action[0] === 'Slice'){
            let first = Number(action[1]);
            let second = Number(action[2]);
            if(first < second){
                letter.splice(first, second - first);
                console.log(letter.join(''))
            }else{
                letter.splice(second, first - second);
                console.log(letter.join(''))
            }
        }
        command = data.shift();
    }
    console.log(`Your activation key is: ${letter.join('')}`)
}
activationKeys(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"])