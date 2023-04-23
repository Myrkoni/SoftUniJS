function solve(input){
    let index = 0;
    let countLoads = Number(input[index]);
    index++
    let tonnage = Number(input[index]);
    index++
    let countMunubus = 0;
    let countTruck = 0;
    let countTrain = 0;
    let countTonnage = 0;
    for (let i = 0; i < countLoads; i++){
        countTonnage += tonnage;
        if(tonnage <= 3){
            countMunubus += tonnage;
        }else if(tonnage >= 4 && tonnage <= 11){
            countTruck += tonnage;
        }else{
            countTrain += tonnage;
        }
        tonnage = Number(input[index]);
        index++;
    }
    console.log(((countMunubus * 200 + countTruck * 175 + countTrain * 120)/countTonnage).toFixed(2));
    console.log(`${((countMunubus / countTonnage) * 100).toFixed(2)}%`);
    console.log(`${((countTruck / countTonnage) * 100).toFixed(2)}%`);
    console.log(`${((countTrain / countTonnage) * 100).toFixed(2)}%`);
}
solve([4,
    1,
    5,
    16,
    3
    ])