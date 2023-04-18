function solve(input){
    let timePhoto = Number(input[0]);
    let countScene = Number(input[1]);
    let timeScene = Number(input[2]);

    let timeMovie = timePhoto * 0.15 + countScene * timeScene;

    if(timePhoto >= timeMovie){
        console.log(`You managed to finish the movie on time! You have ${Math.round(timePhoto - timeMovie)} minutes left!`);
    }else{
        console.log(`Time is up! To complete the movie you need ${Math.round(timeMovie - timePhoto)} minutes.`);
    }
}
solve(["60",
"15",
"3"])