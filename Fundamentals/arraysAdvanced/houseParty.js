function houseParty(input) {
    let guests = [];

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ")

        if (command[2] === "going!") {
            for (let j = 0; j <= guests.length; j++) {
                if (guests[j] !== command[0]) {
                    guests.push(command[0])
                    break;
                } else {
                    console.log(`${command[0]} is already in the list!`)
                    break;
                }
            }
        } else {
            let isNotList = false;
            for ( j = 0; j < guests.length; j++) {
                if (guests[j] === command[0]) {
                    guests.splice(j, 1);
                    isNotList = false;
                    break;
                } else {
                    isNotList = true;
                }

            }
            if (isNotList) {
                console.log(`${command[0]} is not in the list!`)
            } 
        }
    }

    console.log(guests.join("\n"));



}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)