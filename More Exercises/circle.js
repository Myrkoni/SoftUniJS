function solve(input){
    let radius = Number(input[0]);

    let calculatedArea = Math.PI * radius * radius;
    let calculatedParameter =  Math.PI * radius * 2;

    console.log(calculatedArea.toFixed(2));
    console.log(calculatedParameter.toFixed(2));
}
solve([3])