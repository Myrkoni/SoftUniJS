function arrayManipulator(arr1, arr2) {

    for (let el of arr2) {
        let command = el.split(" ");

        switch (command[0]) {
            case "add": arr1.splice(command[1], 0, Number(command[2])); break;
            case "addMany":
                for (let i = command.length - 1; i > 1; i--) {
                    arr1.splice(command[1], 0, Number(command[i]));
                };
                break;
            case "contains": console.log(arr1.indexOf(Number(command[1]))); break;
            case "remove": arr1.splice(command[1], 1); break;
            case "shift": 
            for(let i = 0; i < command[1]; i++){
                let el = arr1.shift();
                arr1.push(Number(el));
            };
            break;
            case "sumPairs":
                let newArr = arr1;
                arr1 = [];
                for(let i = 0; i < newArr.length; i += 2){
                    if(typeof(newArr[i + 1]) === "number"){
                    arr1.push(newArr[i] + newArr[i + 1]);
                    }else{
                        arr1.push(newArr[i]);
                    }
                };
                break;
            case "print":
            arr1 = arr1.join(", ");
            console.log(`[ ${arr1} ]`); 
            return;
        }
    }
}
arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'sumPairs', 'print']
)
