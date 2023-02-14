function solve(input){
    let vineyard = Number(input[0]);
    let grapes = Number(input[1]);
    let needLiters = Number(input[2]);
    let workers = Number(input[3]);

    let totalGrapes = vineyard * grapes;
    let wine = (totalGrapes / 2.5) * 0.40;

    if(needLiters > wine){
        console.log(`It will be a tough winter! More ${Math.floor(needLiters - wine)} liters wine needed.`);
    }else{
        let wineLeft = wine - needLiters
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wineLeft)} liters left -> ${Math.ceil(wineLeft / workers)} liters per person.`)
    }
}
solve([1020,
    1.5,
    425,
    4])