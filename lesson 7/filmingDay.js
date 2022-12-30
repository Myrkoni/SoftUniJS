function solve(input){
    let movengTime = Number(input[0]);
    let countScenes = Number(input[1]);
    let timeScenes = Number(input[2]);

    let totalTime = movengTime * 0.85;
    let totalMovingTime = countScenes * timeScenes;

    if(totalTime > totalMovingTime){
        console.log(`You managed to finish the movie on time! You have ${Math.round(totalTime - totalMovingTime)} minutes left!`)
    }else{
        console.log(`Time is up! To complete the movie you need ${Math.round(totalMovingTime - totalTime)} minutes.`)
    }
}
solve(["120", "10", "11"])