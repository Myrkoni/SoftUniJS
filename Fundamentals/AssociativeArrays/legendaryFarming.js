function legendaryFarming(input) {
    let items = {
        "shards": "Shadowmourne",
        "fragments": "Valanyr",
        "motes": "Dragonwrath",
    }
    let materials = {
        "shards": 0,
        "fragments": 0,
        "motes": 0,
    };
    let junk = {};

    let giveMaterials = input.split(" ");
    for (let i = 0; i < giveMaterials.length; i += 2) {
        let material = (giveMaterials[i + 1]).toLowerCase();
        let quantity = Number(giveMaterials[i]);
        if (items.hasOwnProperty(material)) {
            materials[material] += quantity;
            if (materials[material] >= 250) {
                materials[material] -= 250;
                console.log(`${items[material]} obtained!`);
                break;
            }

        } else {
            if (!junk.hasOwnProperty(material)) {
                junk[material] = quantity;
            } else {
                junk[material] += quantity;
            }
        }
    }

    let sortMaterials = Object.entries(materials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    for (let [el, point] of sortMaterials) {
        console.log(`${el}: ${point}`);
    }

    let sortJunk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));

    for (let [el, point] of sortJunk) {
        console.log(`${el}: ${point}`);
    }
}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')