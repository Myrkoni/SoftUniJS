function muOnline(input){
    let eachRoom = input.split("|");
    let health = 100;
    let coins = 0;
    let count = 0;
    let isLife = true;

    for (let el of eachRoom){
        count++;
        let command = el.split(" ");
        let action = command[0];
        let point = Number(command[1]);

        if(action === "potion"){
            let healed = (health + point) < 100 ? point : 100 - health;
            health += point
            if(health > 100){
                health = 100;
            }
            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${health} hp.`);
        }else if(action === "chest"){
            coins += point;
            console.log(`You found ${point} bitcoins.`);
        }else{
            health -= point;
            if(health > 0){
                console.log(`You slayed ${action}.`);
            }else{
                console.log(`You died! Killed by ${action}.`);
                console.log(`Best room: ${count}`);
                isLife = false;
                break;
            }
        }
        
    }
    if(isLife){
        console.log("You've made it!");
        console.log(`Bitcoins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000")