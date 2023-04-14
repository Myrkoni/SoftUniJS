function solve(input){
    let resultFirstMatch = input[0];
    let resultSecomdMatch = input[1];
    let resultThurdMatch = input[2];

    let countWon = 0;
    let countLost = 0;
    let countDrawn = 0;

    if(resultFirstMatch[0] > resultFirstMatch[2]){
        countWon++;
    }else if(resultFirstMatch[0] < resultFirstMatch[2]){
        countLost++;
    }else{
        countDrawn++;
    }

    if(resultSecomdMatch[0] > resultSecomdMatch[2]){
        countWon++;
    }else if( resultSecomdMatch[0] < resultSecomdMatch[2]){
        countLost++;
    }else{
        countDrawn++;
    }

    if(resultThurdMatch[0] > resultThurdMatch[2]){
        countWon++;
    }else if(resultThurdMatch[0] < resultThurdMatch[2]){
        countLost++;
    }else{
        countDrawn++;
    }


    console.log(`Team won ${countWon} games.`);
    console.log(`Team lost ${countLost} games.`);
    console.log(`Drawn games: ${countDrawn}`);
}
solve(["4:2",
"0:3",
"1:0"])