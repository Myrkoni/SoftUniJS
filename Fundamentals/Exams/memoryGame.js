function memoryGame(arr){
    let sequence = arr.shift().split(" ");
    let command = arr.shift().split(" ");
    let count = 0;

    while(command[0] !== "end"){
        command.map(Number);
        let first = command[0];
        let second = command[1];
        let firstEl = sequence[first];
        let secondEl = sequence[second];
        count++;

        if(first === second || Math.min(first, second) < 0 || Math.max(first, second) > sequence.length - 1){
            let el = `-${count}a`
            sequence.splice(sequence.length / 2, 0, el, el);
            command = arr.shift().split(" ");
            console.log("Invalid input! Adding additional elements to the board");
            continue;
        }

        if(firstEl === secondEl){
            console.log(`Congrats! You have found matching elements - ${sequence[first]}!`);
            sequence.splice(Math.max(first, second), 1);
            sequence.splice(Math.min(first, second), 1);
        }else{
            console.log("Try again!");
        }

        if(sequence.length === 0){
            console.log(`You have won in ${count} turns!`);
            return;
        }

        command = arr.shift().split(" ");
    }

    console.log("Sorry you lose :(");
    console.log(sequence.join(" "));   
}

memoryGame([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ])