function solve(input){
    let identity = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let income = 0;

    if( identity === "Premiere"){
        income = rows * columns * 12;
        console.log(`${income.toFixed(2)} leva`);
    }else if(identity === "Normal"){
        income = rows * columns * 7.50;
        console.log(`${income.toFixed(2)} leva`);
    }else if( identity === "Discount"){
        income = rows * columns * 5;
        console.log(`${income.toFixed(2)} leva`);
    }
}
solve(["Discount", "12", "30"])