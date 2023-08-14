function encryptingPassword(data) {
    let count = Number(data.shift());
    let pattern = /(.+)\>([0-9]{3})\|([a-z]{3})\|([A-Z]{3})\|([^\<\>]{3})\<\1/;
    for (let i = 0; i < count; i++) {
        let result = data[i].match(pattern);
        if (result !== null) {
            console.log(`Password: ${result[2]}${result[3]}${result[4]}${result[5]}`);
        } else {
            console.log("Try another password!");
        }
    }
}

encryptingPassword(["3",

    "##>00|no|NO|!!!?<###",

    "##>123|yes|YES|!!!<##",

    "$$<111|noo|NOPE|<<>$$"])