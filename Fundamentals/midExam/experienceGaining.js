function experienceGaining(input){
    let needExperience = Number(input.shift());
    let countBattles = Number(input.shift());

    let experience = 0;
    let isStop = true;

    for(let i = 1; i <= countBattles; i++){
  
        if(i % 15 === 0){
            experience += Number(input[i - 1]) * 1.05;
        }else if(i % 5 === 0){
            experience += Number(input[i - 1]) * 0.90;
        }else  if(i % 3 === 0){
            experience += Number(input[i - 1]) * 1.15;
        }else{
            experience += Number(input[i - 1]);
        }

        if(experience >= needExperience){
            console.log(`Player successfully collected his needed experience for ${i} battles.`);
            isStop = false;
            break;
        }
    }
    if(isStop){
        console.log(`Player was not able to collect the needed experience, ${(needExperience - experience).toFixed(2)} more needed.`)
    }

}
experienceGaining([500,

    5,
    
    50,
    
    100,
    
    200,
    
    100,
    
    30])