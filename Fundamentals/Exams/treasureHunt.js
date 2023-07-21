function treasureHunt(data) {
    let chest = data.shift().split("|");
    let totalChest = [];
    let commad = data.shift();
    
    while (commad !== "Yohoho!") {
        let commads = commad.split(" ");
        let action = commads.shift();
        let item = commads;
        if (action === "Loot") {
            for (let j = 0; j < item.length; j++) {
                if (!chest.includes(item[j])) {
                    chest.unshift(item[j]);
                }
            }
        }
        if (action === "Drop") {
            let index = Number(item);
            if (index >= 0 && index <= chest.length - 1) {
                let dropItem = chest.splice(index, 1).join("");
                chest.push(dropItem);
            }
        }
        if (action === "Steal") {
            let count = Number(item);
            if (chest.length >= count) {
                let stolenItems = chest.slice(chest.length - count);
                totalChest = chest.slice(0, chest.length - count);
                console.log(stolenItems.join(", "));
            } else {
                console.log(chest.join(", "));
                chest = []
            }

        }
        commad = data.shift();

    }
    let averageGain = 0;

    if (totalChest.length > 0) {
        for (let el of totalChest) {
            averageGain += el.length;
        }
        console.log(`Average treasure gain: ${(averageGain / totalChest.length).toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.")
    }
}
treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"])