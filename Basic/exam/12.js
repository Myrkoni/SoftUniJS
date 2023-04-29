function ANDProcessors(input){
    let countNeedProcessors = Number(input[0]);
    let countPeopel = Number(input[1]);
    let coundDays = Number(input[2]);

    let madeProcessors = Math.floor((countPeopel * coundDays * 8) / 3);

    if(madeProcessors >= countNeedProcessors ){
        console.log(`Profit: -> ${((madeProcessors - countNeedProcessors) * 110.10).toFixed(2)} BGN`);
    }else{
        console.log(`Losses: -> ${((countNeedProcessors - madeProcessors) * 110.10).toFixed(2)} BGN`);
    }
}
ANDProcessors(["150",
"7",
"18"])