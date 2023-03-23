function solve(input){
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let symbol = input[2];

    let result = 0;

    if(symbol === "+" || symbol === "-" || symbol === "*" ){ 
        switch(symbol){
            case "+":
                result = N1 +N2;
                break;
                case "-":
                    result = N1 - N2;
                    break;
                    case "*":
                        result = N1 * N2;
                        break;
        }
        if(result % 2 === 0){
            console.log(`${N1} ${symbol} ${N2} = ${result} - even`);
        }else{
            console.log(`${N1} ${symbol} ${N2} = ${result} - odd`);
        }
    }else if(symbol === "/"){
             if(N2 === 0){
            console.log(`Cannot divide ${N1} by zero`);
             }else{
            result = N1 / N2
            console.log(`${N1} / ${N2} = ${result.toFixed(2)}`)
             }
        } 
        else if( symbol === "%"){
            if(N2 === 0){
            console.log(`Cannot divide ${N1} by zero`);  
            }else{
        result = N1 % N2;
        console.log(`${N1} % ${N2} = ${result}`);
            }
    }
}
solve(["10", "0", "%"])