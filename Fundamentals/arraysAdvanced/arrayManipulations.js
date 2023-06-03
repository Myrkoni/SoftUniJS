function arrayManipulations(input){
    let array = input.shift().split(" ");

    for(let i = 1; i < input.length; i++){
        let command = input[i].split(" ");

        switch(command[0]){
            case "Add": add(array, command[1]); break;
            case "Remove": remove(array, command[1]); break;
            case "RemoveAt": removeAt(array, command[1]); break;
            case "Insert": insert(array, command[1], command[2]); break;
        }
    }

     return array.join(" ");

    function add(arr, number){
        return arr.push(number);
    }

    function remove(arr, number){
        let removeIndex = arr.indexOf(number);
        return arr.splice(removeIndex, 1);
    }

    function removeAt(arr, index){
        return arr.splice(index, 1);
    }

    function insert(arr, number, index){
        return arr.splice(index, 0, number);
    }
}

console.log(arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']))