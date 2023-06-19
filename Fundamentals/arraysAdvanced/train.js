function train(input) {
    let array = input.shift().split(" ").map(Number);
    let maxCapacity = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        if (command[0] === "Add") {
            add(array, command[1]);
        } else {
            addPassengers(array, Number(command[0]), maxCapacity);
        }
    }

    console.log(array.join(" "))

    function add(arr, number) {
        return arr.push(Number(number));
    }

    function addPassengers(arr, number, maxLoad) {
        for (let j = 0; j < arr.length; j++) {
            if ((arr[j] + number) <= maxLoad) {
                return arr.splice(j, 1, (arr[j] + number));
            }
        }
    }
}

train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
)