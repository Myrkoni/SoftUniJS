function solve(input){
    let text = input[0];
    let sum = 0;
    for(i = 0; i < text.length; i ++){
        let number = Number(text[i]);
        sum = sum + number;  
    }
    console.log(`The sum of the digits is:${sum}`)
}
solve(["1234"])