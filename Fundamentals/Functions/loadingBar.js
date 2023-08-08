function loadingBar(number){
    let digit = number / 10;
    let result1 = "";
    let result2 = "";

    for(let i = 0; i < digit; i++){
        result1 += `${"%"}`;
    }
    for(let i = digit; i < 10; i++){
        result2 += `${"."}`;
    }

    if(number < 100){
    console.log(`${number}% [${result1}${result2}]`);
    console.log('Still loading...');
    }else{
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    }
}
loadingBar(100)