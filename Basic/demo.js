function solve(arrey){
    let userName = arrey[0];
    let password = "";
    for(let i = userName.length - 1; i >= 0; i--){
        password +=`${userName.charAt(i)}`;
    }
    for(let i = 1; i < arrey.length; i++){
        let correctPassword = arrey[i];
        if(correctPassword === password){
            console.log(`User ${userName} logged in.`);
        }else if(correctPassword !== password && i < 4){
            console.log("Incorrect password. Try again.");
        }
        if(i === 4 && correctPassword !== password){
            console.log(`User ${userName} blocked!`);
            break;
        }
    }
}
solve(['sunny','rainy','cloudy','sunny','not sunny']);