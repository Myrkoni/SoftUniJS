function shoppingList(input){
    let shopping = input.shift().split("!");

    let command = input.shift();

    while(command !== "Go Shopping!"){
        let commands = command.split(" ");

        if(commands[0] === "Urgent"){
            if(!shopping.includes(commands[1])){
                shopping.unshift(commands[1]);
            }
        }
        if(commands[0] === "Unnecessary"){
            if(shopping.includes(commands[1])){
                shopping.splice(shopping.indexOf(commands[1]), 1);
            }
        }
        if(commands[0] === "Correct"){
            if(shopping.includes(commands[1])){
                shopping.splice(shopping.indexOf(commands[1]), 1, commands[2]);
            }
        }
        if(commands[0] === "Rearrange"){
            if(shopping.includes(commands[1])){
                let el = shopping.splice(shopping.indexOf(commands[1]), 1);
                shopping.push(el);
            }
        }

        command = input.shift();
    }

    console.log(shopping.join(", "))
}
shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])