function arrayModifier(input) {
    let arr = input.shift().split(" ").map(Number);
    let command = input.shift().split(" ");

    while (command[0] !== "end") {
        let firstIndex = Number(command[1]);
        let secondIndex = Number(command[2])
        switch (command[0]) {
            case "swap": swap(arr, firstIndex, secondIndex); break;
            case "multiply": multiply(arr, firstIndex, secondIndex); break;
            case "decrease": decrease(arr); break;
        }
        command = input.shift().split(" ");
    }

    console.log(arr.join(", "))

    function swap(arr, index1, index2) {
        let indexMax = Math.max(index1, index2);
        let indexMin = Math.min(index1, index2);

        let firstEl = Number(arr.splice(indexMax, 1).join(""));
        let secondEl = Number(arr.splice(indexMin, 1).join(""));
        arr.splice(indexMin, 0, firstEl);
        arr.splice(indexMax, 0, secondEl);
    }

    function multiply(arr, index1, index2){
        let firstEl = arr[index1];
        arr.splice(index1, 1 , (firstEl * arr[index2]));
    }

    function decrease(arr){
        for (let i = 0; i < arr.length; i++) {
            arr[i] = arr[i] - 1;
        }
    }
}

arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
])

console.log(86, 7382, 2369942, -124, 41, 89, -3);