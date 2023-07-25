function movingTarget(arr){
    let targets = arr.shift().split(" ").map(Number);
    let command = arr.shift().split(" ");

    while(command[0] !== "End"){
        let index = Number(command[1]);
        let action = Number(command[2]);

        switch (command[0]){
            case "Shoot": shot(targets, index, action); break;
            case "Add": add(targets, index, action); break;
            case "Strike": strike(targets, index, action); break;
        }

        command = arr.shift().split(" ");
    }

    console.log(targets.join("|"));

    function shot(targets, index, power){

        if(index < 0 || index > targets.length - 1){
            return;
        }

        targets[index] -= power;

        if(targets[index] <= 0){
            targets.splice(index, 1);
        }
    }

    function add(targets, index, value){
        
        if(index < 0 || index > targets.length - 1){
            console.log("Invalid placement!");
            return;
        }
        targets.splice(index, 0, value);
    }

    function strike(targets, index, radius){
        let start = index - radius;
        let stop = index + radius;

        if(start < 0 || stop > targets.length -1){
            console.log("Strike missed!");
            return;
        }
        targets.splice(start, (stop - start) + 1 );
    } 
}

movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])
