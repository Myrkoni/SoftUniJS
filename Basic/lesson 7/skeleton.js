function solve(input){
    let minutesOfControls = Number(input[0]);
    let secondsOfControls = Number(input[1]);
    let lengthOfChute = Number(input[2]);
    let secondsOf100Meters = Number(input[3]);

    let timeOfControl = minutesOfControls * 60 + secondsOfControls;
    let totalTime = (lengthOfChute / 100) * secondsOf100Meters - (lengthOfChute / 120) * 2.5;

    if(totalTime <= timeOfControl){
        console.log("Marin Bangiev won an Olympic quota!");
        console.log(`His time is ${totalTime.toFixed(3)}.`);
    }else{
        console.log(`No, Marin failed! He was ${(totalTime - timeOfControl).toFixed(3)} second slower.`);
    }
}

solve(["2",
"12",
"1200",
"10"])