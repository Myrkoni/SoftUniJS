function solve(input){
    let season = input[0];
    let kilometers = Number(input[1]);

    let salary = 0;

    if ( kilometers <= 5000){
        if( season === "Spring" || season === "Autumn"){
            salary = (0.75 * kilometers * 4) * 0.90;
        }else if ( season === "Summer"){
            salary = (0.90 * kilometers * 4) * 0.90;
        }else if (season === "Winter"){
            salary = (1.05 * kilometers * 4) * 0.90;
        }
    }else if ( kilometers > 5000 && kilometers <= 10000){
        if( season === "Spring" || season === "Autumn"){
            salary = (0.95 * kilometers * 4) * 0.90;
        }else if ( season === "Summer"){
            salary = (1.10 * kilometers * 4) * 0.90;
        }else if (season === "Winter"){
            salary = (1.25 * kilometers * 4) * 0.90;
        }
    }else if ( kilometers > 10000 && kilometers <= 20000){
        salary = (1.45 * kilometers * 4) * 0.90;
    }
    console.log(salary.toFixed(2));
}
solve(["Spring",
    1600])