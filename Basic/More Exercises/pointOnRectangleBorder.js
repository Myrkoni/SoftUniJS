function solve(input){
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x = Number(input[4]);
    let y = Number(input[5]);

    if(x1 === x || x2 === x){
        if(y1 <= y && y2 >= y ){
            console.log(`Border`);
        }else {
            console.log(`Inside / Outside`);
        }
    }else if(y1 === y || y2 === y){
        if(x1 <= x && x2 >= x){
            console.log(`Border`);
        }else{
            console.log(`Inside / Outside`);
        }
    }else{
        console.log(`Inside / Outside`);
    }
}
solve([2,
    -3,
    12,
    3,
    12,
    -1
    ])