function timePlusMinets(input){
    let hour = Number(input[0]);
    let minets= Number(input[1]);
    let sumMinets = (hour *60 + minets) + 15;
    let totalTime = Math.floor(sumMinets /60);
    let totalMinets = sumMinets % 60;
    if(totalTime > 23){
        totalTime = 0;
        if(totalMinets < 10){
            console.log(`${totalTime}:0${totalMinets}`);
        }else {
            console.log(`${totalTime}:${totalMinets}`);
        }
    }else{
        if(totalMinets < 10){
            console.log(`${totalTime}:0${totalMinets}`);
        }else {
            console.log(`${totalTime}:${totalMinets}`);  
    }

    }
}
timePlusMinets(["23", "59"])