function garage(data) {
    let garage = {};

    for (let el of data) {
        let garageNumber = el.split(' - ').shift();
        let car = el.split(' - ').pop();
        if (!garage.hasOwnProperty(garageNumber)) {
            garage[garageNumber] = [];
        }
        if (garage.hasOwnProperty(garageNumber)) {
            garage[garageNumber].push(car);
        }
    }

    for (let key of Object.keys(garage)) {
        console.log(`Garage № ${key}`);
        for (let el of garage[key]) {
            let result = '';
            let element = el.split(', ');
            for (let i = 0; i < element.length; i++) {
                let [first, second] = element[i].split(': ');
                if (i === element.length - 1) {
                    result += `${first} - ${second}`;
                } else {
                    result += `${first} - ${second}, `;
                }
            }
            console.log(`--- ${result}`)
        }
    }
}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])