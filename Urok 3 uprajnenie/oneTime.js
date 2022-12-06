function solve(input){
    let hourExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let hourArriva = Number(input[2]);
    let minuteArriva = Number(input[3]);

    let timeDelay = 0;
    let coment = "";
    let h = 0;
    let m = 0;

    let timeExam = hourExam * 60 + minuteExam;
    let timeArriva = hourArriva * 60 + minuteArriva;

    if(timeExam < timeArriva){
        timeDelay = timeArriva - timeExam;
        coment ="Late";
        console.log("Late");
    }else if((timeExam - timeArriva) <= 30){
        timeDelay = timeExam - timeArriva;
        coment ="On Time";
        console.log("On Time");
    }else if((timeExam - timeArriva) > 30){
        timeDelay = timeExam - timeArriva;
        coment = "Early";
        console.log("Early");
    }
    h = timeDelay / 60;
    m = timeDelay % 60;
    
    if(timeExam === timeArriva) {
        console.log();
    }else if(timeDelay < 60 && coment === "On Time"){
        console.log(`${timeDelay} minutes before the start`)
    }else if(timeDelay < 60 && coment ==="Early"){
        console.log(`${timeDelay} minutes before the start`)
    }else if(timeDelay >= 60 && coment ==="Early"){
        if(m < 10){
            console.log(`${Math.floor(h)}:0${m} hours before the start`);
        }else{
            console.log(`${Math.floor(h)}:${m} hours before the start`)
        }
    }else if(timeDelay >= 60 && coment ==="Late"){
        if(m < 10){
            console.log(`${Math.floor(h)}:0${m} hours after the start`);
        }else{
            console.log(`${Math.floor(h)}:${m} hours after the start`)
        }
   }else if(timeDelay < 60 && coment === "Late"){
            console.log(`${m} minutes after the start`);
   }
}
solve(["14", "00", "13", "55"])