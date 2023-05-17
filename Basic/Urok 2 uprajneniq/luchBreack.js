    function lunchBreach(input){
        let titel = input[0];
        let leftEpisode = Number(input[1]);
        let lefrBreack = Number(input[2]);
        
        let bread = (1/8) * lefrBreack;
        let sleep = (1/4) * lefrBreack;
        let timeLeft = lefrBreack - sleep - bread;

        if( timeLeft >= leftEpisode){
            let leftTime = Math.ceil(timeLeft - leftEpisode);
            console.log(`You have enough time to watch ${titel} and left with ${leftTime} minutes free time.`)
        }else {
            let needTime = Math.ceil(leftEpisode - timeLeft);
            console.log(`You don't have enough time to watch ${titel}, you need ${needTime} more minutes.`)
        }
    }
lunchBreach(["Game of Thrones",

"60",

"96"])