function meetings(input){
    let meetingDays = {};

    for(let el of input){
        let [day, name] = el.split(" ");
        if(meetingDays.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }else{
            console.log(`Scheduled for ${day}`);
            meetingDays[day] = name;
        }
    }

    for(let el in meetingDays){
        console.log(`${el} -> ${meetingDays[el]}`)
    }
}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])