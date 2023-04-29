function moon(input){
    let averageSpeed = Number(input[0]);
    let litersFuel = Number(input[1]);

    let totalTime = (384400 * 2) / averageSpeed + 3;
    let totalFuel = ((384400 * 2) / 100) * litersFuel;

    console.log(`${Math.ceil(totalTime)}`);
    console.log(`${totalFuel}`);

}
moon(["10000",
"5"])