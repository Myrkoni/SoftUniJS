function shootForTheWin(arr) {
    let targets = arr.shift().split(" ").map(Number);
    let command = arr.shift();
    let count = 0;

    while (command !== "End") {
        command = Number(command);
        if (command < 0 || command > targets.length - 1) {
            command = arr.shift();
            continue;
        }
        if(targets[command] === -1){
            command = arr.shift();
            continue;
        }

        let shot = targets[command]
        targets[command] = -1;   
        count++;     

        for (let i = 0; i < targets.length; i++) {
            
            if(targets[i] === -1){
                continue;
            }
            if(targets[i] > shot){
                targets[i] -=  shot;
                continue;
            }
            if(targets[i] <= shot){
                targets[i] += shot;
                continue;
            }

        }


        command = arr.shift();
    }

    console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
}

shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])