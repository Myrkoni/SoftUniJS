function solve(input){
    let start = input[0];
    let stop = input[1];
    let missed = input[2]
    let count = 0;
    let a = start.charCodeAt(input);
    let b = stop.charCodeAt(input);
    let c = missed.charCodeAt(input);
    let result2 = "";

    for(let i = a; i <= b; i++){
        for(let e = a; e <= b; e++){
            for(let o = a; o <= b; o++){
                if(o !== c && i !== c && e !== c){
                    let result = String.fromCharCode(i) + String.fromCharCode(e) + String.fromCharCode(o);
                    result2 += ` ${result}`                   
                    count++;
                }
            }
        }
    }
    console.log(`${result2} ${count}`);
}
solve(["f",
    "k",
    "h"])