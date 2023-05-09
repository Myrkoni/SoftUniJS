function solve(input){
    let lastSector = input[0];
    let rows = Number(input[1]);
    let placesOdd = Number(input[2]);
    let counSector = 0;
    let countPlaces = 0;

    
    for( let i = 65 ; i <= lastSector.codePointAt(0); i++){
        counSector++;
        if(counSector >= 2){
            rows++;
        }
        for(let e = 1; e <= rows; e++){
            if(e % 2 === 0){
                placesOdd+=2;
            }
            for(let u = 97; u < 97 + placesOdd; u++){
                countPlaces++;
                console.log(`${String.fromCharCode(i)}${e}${String.fromCharCode(u)}`);
            }
            placesOdd = Number(input[2]);
        }

    }
    console.log(countPlaces);
}
solve(["B", 3, 2])