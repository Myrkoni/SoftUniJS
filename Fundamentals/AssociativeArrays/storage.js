function storage(input) {
    let store = new Map();

    for (let el of input) {
        let [items, quantity] = el.split(" ");
        quantity = Number(quantity);

        if (store.has(items)) {
            let currentQuantity = store.get(items);
            store.set(items, currentQuantity + quantity)
        } else {
            store.set(items, quantity);
        }
    }
    
    for(let key of store){
        console.log(`${key[0]} -> ${key[1]}`);
    }

}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])