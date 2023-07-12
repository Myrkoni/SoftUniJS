function inventory(input){
    let journal = input.shift().split(", ");

    let commad = input.shift();

    while(commad !== "Craft!"){
        let [action, item] = commad.split(" - ");

        if(action === "Collect"){
            if(!journal.includes(item)){
                journal.push(item);
            }
        }
        if(action === "Drop"){
            if(journal.includes(item)){
                journal.splice(journal.indexOf(item), 1);
            }
        }
        if(action === "Combine Items"){
            let [oldItem, newItem] = item.split(":");
            if(journal.includes(oldItem)){
                journal.splice(journal.indexOf(oldItem ) + 1, 0, newItem);
            }
        }
        if(action === "Renew"){
            if(journal.includes(item)){
                let jump = journal.splice(journal.indexOf(item), 1).join("");
                journal.push(jump);
            }
        }
        commad = input.shift();
    }
    
    console.log(journal.join(", "));

}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])