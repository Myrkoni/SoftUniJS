function inventory(data){
    let result = []

    for(let el of data){
        let [name, level, items] = el.split(" / ");
        let hero = {
        name: name,
        level: level,
        items: items,
        };
        result.push(hero);
    }

    result.sort((a, b) => a.level - b.level);

    for(let el of result){
       let hero = Object.values(el)
       console.log(`Hero: ${hero[0]}`);
       console.log(`level => ${hero[1]}`);
       console.log(`items => ${hero[2]}`);
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])