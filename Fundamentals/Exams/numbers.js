function numbers(input){
    let arr = input.split(" ").map(Number);

    let avr = 0;
    for (const el of arr) {
        avr += el
    }
    avr = avr / arr.length;
    let result = arr.filter( x => x > avr).sort((a, b) => b - a); 
    let totalResult = result.slice(0, 5);

    if(totalResult.length === 0 ? console.log("No") : console.log(totalResult.join(" ")));
    

}

numbers('1')