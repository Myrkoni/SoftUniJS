function solve(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let speedOneMeter = Number(input[2]);

    let swol = (Math.floor(distance / 15 ) ) * 12.5

    let totalTime = (distance * speedOneMeter) + swol;

    if (totalTime < record){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }else{
        let timeNedet = totalTime - record
        console.log(`No, he failed! He was ${timeNedet.toFixed(2)} seconds slower.`)
    }
}
solve(["55555.67",

"3017","5.03"])