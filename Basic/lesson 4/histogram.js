function solve(input){
    let numberCount = Number(input[0]);
    let curentNumber = 0;
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    for(let i = 1; i<= numberCount; i++){
        curentNumber = Number(input[i]);
        if(curentNumber < 200){
            p1++;
        }else if(curentNumber < 400){
            p2++;
        }else if(curentNumber < 600){
            p3++;
        }else if( curentNumber < 800){
            p4++;
        }else {
            p5++
        }
    }
    console.log(`${(p1 / (numberCount/100)).toFixed(2)}%`);
    console.log(`${(p2 / (numberCount/100)).toFixed(2)}%`);
    console.log(`${(p3 / (numberCount/100)).toFixed(2)}%`);
    console.log(`${(p4 / (numberCount/100)).toFixed(2)}%`);
    console.log(`${(p5 / (numberCount/100)).toFixed(2)}%`);
    
}
solve(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"])