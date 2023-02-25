function solve(input){
    let index = 0;
    let name = input[index];
    index++;
    
    let sum1 = 0;
    let sum2 = 0;
    let name2 ="";
    
    while( name !== "Stop"){
        for(let i = 0; i < name.length; i++){
            let points = Number(input[index]);
            index++;
            if(points === name.codePointAt(i)){
                sum1 += 10;
            }else{
                sum1 += 2;
            }
            
        }
        if(sum1 >= sum2){
            sum2 = sum1;
            name2 = name;
        }
        sum1 = 0;
        name = input[index];
        index++;
        
    }
    console.log(`The winner is ${name2} with ${sum2} points!`);
}
solve(["Ivan",
"73",
"20",
"98",
"110",
"Ivo",
"80",
"65",
"87",
"Stop"])

