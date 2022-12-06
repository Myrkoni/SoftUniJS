function solve(input){
    let numberCount = Number(input[0]);
    
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let i = 1; i<= numberCount; i++){
        let curentNumber = Number(input[i]);
        if(curentNumber > 200){
            p1++;
        }else if(curentNumber >= 200 && curentNumber < 400){
            p2++;
        }else if(curentNumber >=400 && curentNumber < 600){
            p3++;
        }else if(curentNumber >= 600 && curentNumber < 800){
            p4++;
        }else if(curentNumber > 800){
            p5++
        }
    }
    console.log(p5);
    
}
solve(["3",

"1",

"2",

"999"])