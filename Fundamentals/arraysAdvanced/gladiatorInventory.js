function gladiatorInventary(arr) {
    let inventary = arr.shift().split(" ");

    for (let el of arr) {
        let command = el.split(" ");

        switch (command[0]) {
            case "Buy":
                if (!inventary.includes(command[1])) {
                    inventary.push(command[1]);
                };
                break;
            case "Trash":
                if (inventary.includes(command[1])) {
                    inventary.splice(inventary.indexOf(command[1]), 1);
                };
                break;
            case "Repair":
                if (inventary.includes(command[1])) {
                    let index = inventary.indexOf(command[1]);
                    let element = inventary[index];
                    inventary.splice(index, 1);
                    inventary.push(element);
                };
                break;
            case "Upgrade":
                let el = command[1].split("-");
                if (inventary.includes(el[0])) {
                    let index = inventary.indexOf(el[0]);
                    let up = `${el[0]}:${el[1]}`
                    inventary.splice(index + 1, 0, up);
                }
        }
    }

    console.log(inventary.join(" "))
}

gladiatorInventary(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']



)