function solve(input) {
    let index = 0;
    let countEggs = Number(input[index]);
    index++;
    let colorEggs = input[index];
    index++;
    let countRed = 0;
    let countOrange = 0;
    let countBlue = 0;
    let countGreen = 0;
    let maxEgg = Number.MIN_SAFE_INTEGER;
    let color = "";

    for (let i = 1; i <= countEggs; i++) {
        switch (colorEggs) {
            case "red":
                countRed++;
                if(countRed > maxEgg){
                    maxEgg = countRed;
                    color = "red";
                }
                break;
            case "orange":
                countOrange++;
                if(countOrange > maxEgg){
                    maxEgg = countOrange;
                    color = "oranged";
                }
                break;
            case "blue":
                countBlue++;
                if(countBlue > maxEgg){
                    maxEgg = countBlue;
                    color = "blue";
                }
                break;
            case "green":
                countGreen++;
                if(countGreen > maxEgg){
                    maxEgg = countGreen;
                    color = "green";
                }
                break;
        }
        colorEggs = input[index];
        index++;
    }
    console.log(`Red eggs: ${countRed}`);
    console.log(`Orange eggs: ${countOrange}`);
    console.log(`Blue eggs: ${countBlue}`);
    console.log(`Green eggs: ${countGreen}`);
    console.log(`Max eggs: ${maxEgg} -> ${color}`)
}
solve(["7", "orange", "blue", "green", "green", "blue", "red", "green"]);