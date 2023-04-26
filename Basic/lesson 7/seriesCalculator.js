function solve(input){
    let serial = input[0];
    let countSeason = Number(input[1]);
    let countEpisode = Number(input[2]);
    let timeEpisode = Number(input[3]);

    let totalTime = ((timeEpisode * 1.20) * countEpisode) * countSeason + (countSeason * 10) ;
    console.log(`Total time needed to watch the ${serial} series is ${Math.floor(totalTime)} minutes.`);
}
solve(["Game of Thrones",
"7",
"10",
"50"])