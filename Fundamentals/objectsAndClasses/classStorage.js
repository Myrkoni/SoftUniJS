class Storage {
    constructor(capacity) {
        this.capacity = capacity;
        this.storage = [];
        this.totalCost = 0;
    }
    addProduct(product) {
        this.storage.push(product);
        let objKey = Object.values(product);
        this.totalCost += objKey[1] * objKey[2];
        this.capacity -= objKey[2];
    }

    getProducts() {
        let result = ""
        for (let i = 0; i < this.storage.length; i++) {
            if (i === this.storage.length - 1) {
                result += `${JSON.stringify(this.storage[i])}`;
            } else {
                result += `${JSON.stringify(this.storage[i])}\n`;
            }
        }
        return result;
    }
}

let productOne = {
    name: 'Cucamber',
    price: 1.50, quantity: 15
};
let productTwo = {
    name: 'Tomato',
    price: 0.90, quantity: 25
};
let productThree = {
    name: 'Bread',
    price: 1.10, quantity: 8
};
let storage = new Storage(50);
storage.addProduct(productOne);
storage.addProduct(productTwo);
storage.addProduct(productThree);
console.log(storage.getProducts());
console.log(storage.capacity);
console.log(storage.totalCost);
