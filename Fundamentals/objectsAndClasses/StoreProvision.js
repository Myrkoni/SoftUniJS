function storeProvision(stock, order){
    let store = {};

    for(let i = 0; i < stock.length; i += 2){
        store[stock[i]] = Number(stock[i + 1]);
    }
    for(let i = 0; i < order.length; i += 2){
        if(Object.getOwnPropertyDescriptor(store, order[i])){
            store[order[i]] += Number(order[i + 1]);
        }else{
            store[order[i]] = Number(order[i + 1]);
        }
    }

    for(let key of Object.keys(store)){
        console.log(`${key} -> ${store[key]}`);
    }

}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ])