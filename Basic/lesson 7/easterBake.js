function solve(input) {
    let breadCount = Number(input[0]);

    let allShugarCount = 0;
    let allFlourCount = 0;
    let maxShugar = 0;
    let maxFlour = 0;

    for (let i = 1; i <= breadCount * 2; i += 2) {
        let shugarCount = Number(input[i]);
        let flourCount = Number(input[i + 1]);

        allShugarCount += shugarCount;
        allFlourCount += flourCount;

        if(shugarCount > maxShugar){
            maxShugar = shugarCount;
        }
        if(flourCount > maxFlour){
            maxFlour = flourCount;
        }

    }

    console.log(`Sugar: ${Math.ceil(allShugarCount / 950)}`);
    console.log(`Flour: ${Math.ceil(allFlourCount / 750)}`);
    console.log(`Max used flour is ${maxFlour} grams, max used sugar is ${maxShugar} grams.`);
}
solve(["4",
"500",
"350",
"560",
"430",
"600",
"345",
"578",
"543"])