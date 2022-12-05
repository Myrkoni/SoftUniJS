function solve(input){
    let weekDay = Number(input[0]);

    let workday = 365 - weekDay;
    let timeGameYear = 30000;
    let totalTimeGame = (workday * 63) + (weekDay * 127);
    let hours = 0;
    let minets = 0;

    if(timeGameYear >= totalTimeGame){
        console.log("Tom sleeps well");
        let moreGame = timeGameYear - totalTimeGame;
        hours = Math.floor(moreGame / 60);
        minets = moreGame % 60;
        if(minets < 10){
            console.log(`${hours} hours and 0${minets} minutes less for play`);
        }else{
            console.log(`${hours} hours and ${minets} minutes less for play`);
        }
    }else if(timeGameYear < totalTimeGame){
        console.log("Tom will run away");
        let needRest = totalTimeGame - timeGameYear;
        hours = Math.floor(needRest / 60);
        minets = needRest % 60;
        if(minets < 10){
            console.log(`${hours} hours and 0${minets} minutes more for play`);
        }else{
            console.log(`${hours} hours and ${minets} minutes more for play`);
        }

    }
}
solve([113])