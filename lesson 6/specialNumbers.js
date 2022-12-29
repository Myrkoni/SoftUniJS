function solve(input){
    let Num = Number(input[0]);
    let result = "";

    for( i = 1111; i <= 9999; i++){
        let currentNumStr = i.toString();
        let isSpetial = true;

        for ( j = 0; j < currentNumStr.length; j++){
            let currentDigit = Number(currentNumStr[j]);
       
        if (Num % currentDigit !== 0){
            isSpetial = false;
            break;
        }
        }
        if( isSpetial){
            result += `${currentNumStr} `;
        }
    }
    console.log(result);
}
solve(["3"])