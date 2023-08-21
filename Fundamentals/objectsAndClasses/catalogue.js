function catalogue(data){
    let products = {};

    for(let el of data){
        let [name, price] = el.split(" : ");
        products[name] = Number(price);
    }
    
    let sortKeys = Object.keys(products).sort((a, b) => a.localeCompare(b));
    let char = ""

    for(let key of sortKeys){
        if(char !== key[0]){
            char = key[0]
            console.log(char);
        }
        console.log(`  ${key}: ${products[key]}`)

    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ])
